import os
import glob
from PIL import Image

def create_thumbnail(img, thumb_path, max_size=(500, 500)):
    """Creates and saves a thumbnail using Lanczos resampling."""
    img_copy = img.copy()
    img_copy.thumbnail(max_size, Image.Resampling.LANCZOS)
    # Using quality 90 and method 6 for maximum compression efficiency while retaining perceptual quality
    img_copy.save(thumb_path, 'WEBP', quality=90, method=6)

def main():
    imgs_dir = os.path.join(os.getcwd(), 'imgs')
    
    # 1. Convert new PNGs to full-res lossless WEBP and generate thumbs
    png_files = glob.glob(os.path.join(imgs_dir, '*.png'))
    for png_file in png_files:
        base_name = png_file[:-4]
        webp_file = base_name + '.webp'
        thumb_file = base_name + '_thumb.webp'
        
        print(f'Converting {png_file} to {webp_file} and thumbnail...')
        with Image.open(png_file) as img:
            # Save original lossless
            img.save(webp_file, 'WEBP', lossless=True)
            # Create and save thumb
            create_thumbnail(img, thumb_file)
            
        # Remove original png
        os.remove(png_file)
        
    # 2. Check existing WEBP files that might be missing a thumbnail
    webp_files = glob.glob(os.path.join(imgs_dir, '*.webp'))
    for webp_file in webp_files:
        if '_thumb' in webp_file:
            continue
        
        base_name = webp_file[:-5] # remove .webp
        thumb_file = base_name + '_thumb.webp'
        
        if not os.path.exists(thumb_file):
            print(f'Generating missing thumbnail for {webp_file}...')
            with Image.open(webp_file) as img:
                create_thumbnail(img, thumb_file)
                
    print('Updating references in app.js and styles.css...')
    app_js_path = os.path.join(os.getcwd(), 'app.js')
    styles_css_path = os.path.join(os.getcwd(), 'styles.css')
    
    if os.path.exists(app_js_path):
        with open(app_js_path, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace('.png', '.webp')
        with open(app_js_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    if os.path.exists(styles_css_path):
        with open(styles_css_path, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace('.png', '.webp')
        with open(styles_css_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print('Done.')

if __name__ == '__main__':
    main()

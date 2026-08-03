import os
import glob
from PIL import Image

def main():
    imgs_dir = os.path.join(os.getcwd(), 'imgs')
    png_files = glob.glob(os.path.join(imgs_dir, '*.png'))
    
    for png_file in png_files:
        webp_file = png_file[:-4] + '.webp'
        print(f'Converting {png_file} to {webp_file}...')
        with Image.open(png_file) as img:
            img.save(webp_file, 'WEBP', lossless=True)
        # Remove original png
        os.remove(png_file)
        
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

const BUSINESS_NAME = "";
const WHATSAPP_NUMBER = "525564520883";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    // Rellenar espacios en blanco
    const logos = document.querySelectorAll('.logo, .logo-footer');
    logos.forEach(logo => {
        if (BUSINESS_NAME) logo.textContent = BUSINESS_NAME;
    });

    const waLinks = [
        document.getElementById('floatingWhatsapp'),
        document.getElementById('footerWhatsappLink')
    ];

    waLinks.forEach(link => {
        if (link && WHATSAPP_NUMBER) {
            link.href = `https://wa.me/${WHATSAPP_NUMBER}`;
        } else if (link) {
            link.href = "#";
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert("Número de WhatsApp pendiente de configurar.");
            });
        }
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    renderProducts(perfumes);
    setupFilters();
    setupSearch();
    setupModal();
    setupHeroSlider();
});

function setupHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000); // Cambia cada 4 segundos
}

// Base de datos de perfumes
const perfumes = [
    // Mujer
    { id: 1, name: "Tom Ford Lost Cherry", img: "imgs/img1.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Cereza negra, almendra amarga, licor de cereza, rosa turca, jazmín sambac, vainilla, sándalo.", description: "Una fragancia golosa y adictiva que envuelve en un aroma a cereza madura y almendra tostada, con un fondo cálido de vainilla y sándalo. Sensual, dulce y memorable — de esas que se quedan en la memoria de quien la huele." },
    { id: 2, name: "Tom Ford Lost Cherry (versión roja)", img: "imgs/img2.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Cereza negra, almendra amarga, licor de cereza, rosa turca, jazmín sambac, vainilla, sándalo.", description: "La misma seducción de la cereza negra, ahora en una edición de presencia aún más audaz. Ideal para quien busca destacar con un aroma dulce, especiado y profundamente sensual." },
    { id: 3, name: "Armani Privé Pivoine Suzhou", img: "imgs/img3.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Peonía, pera, almizcle blanco, notas verdes.", description: "Delicada y luminosa, esta fragancia floral captura la frescura de un jardín en primavera. La peonía se abre suave y afrutada, dejando una estela limpia y elegante perfecta para el día a día." },
    { id: 4, name: "212 Carolina Herrera", img: "imgs/img4.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Hoja de violeta, orquídea del Amazonas, cassia.", description: "Fresca, moderna y urbana. 212 es el ícono de la mujer cosmopolita: cítrica al inicio, floral en el corazón, con un cierre limpio y sofisticado ideal para la oficina o el día a día." },
    { id: 5, name: "Cosmic – Kylie Jenner", img: "imgs/img5.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Jazmín estrella, naranja sangre, ámbar dorado, peonía roja, almizcle, vainilla, cedro.", description: "Un floral ambarino dulce y magnético, pensado para brillar de día y de noche. Cítrico y jazminado al abrir, se asienta en un fondo cálido de vainilla y almizcle — coqueto y fácil de amar." },
    { id: 6, name: "Creed Aventus for Her", img: "imgs/img6.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Bergamota, grosella negra, rosa búlgara, jazmín, pachulí, almizcle, sándalo.", description: "La versión femenina del icónico Aventus: afrutada y floral con un carácter fuerte y elegante. Perfecta para la mujer segura que busca un aroma que combina dulzura y sofisticación en partes iguales." },
    { id: 7, name: "Yves Saint Laurent (Eau de Parfum)", img: "imgs/img7.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Iris, azahar, vainilla, sándalo.", description: "Un floral elegante con acentos suaves de flor de azahar y un fondo cálido y envolvente. Sofisticación atemporal para quien prefiere un aroma discreto pero inconfundible." },
    { id: 8, name: "La Belle – Jean Paul Gaultier", img: "imgs/img8.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Pera, azahar, haba tonka.", description: "Dulce, luminosa y encantadora: La Belle combina la frescura frutal de la pera con la calidez gourmand de la haba tonka. Un aroma que enamora desde el primer roce." },
    { id: 9, name: "Valentino Donna", img: "imgs/img9.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Iris, rosa, ámbar, cuero.", description: "Elegancia italiana en su máxima expresión. Floral con un toque de cuero suave, Valentino Donna transmite feminidad clásica con carácter y profundidad." },
    { id: 10, name: "Amor Amor – Cacharel", img: "imgs/img10.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Fresa, frambuesa, flor de azahar, rosa, vainilla.", description: "Juguetón y romántico, con un estallido inicial de frutos rojos que se suaviza en flores blancas y vainilla. El aroma perfecto para una cita o una tarde despreocupada." },
    { id: 11, name: "Amor Amor Tentation – Cacharel", category: "mujer", type: "Mujer", price: "Consultar", notes: "Mandarina, caramelo, flor de azahar, vainilla, almizcle.", description: "Una versión aún más golosa del original: dulce, cálida y envolvente, con acentos de caramelo que la hacen irresistible y muy fácil de llevar todo el año." },
    { id: 12, name: "Good Girl Blush Elixir – Carolina Herrera", img: "imgs/img12.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Almendra, jazmín, tuberosa, cacao, haba tonka.", description: "Sensual e intensa, esta versión elixir profundiza el ADN dulce-floral de Good Girl con acentos de almendra y cacao. Glamurosa, atrevida y perfecta para la noche." },
    { id: 13, name: "Acqua di Gioia – Giorgio Armani", img: "imgs/img13.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Limón, menta, jazmín, cedro.", description: "Fresca como el mar Mediterráneo. Cítrica y acuática, con un corazón floral limpio — ideal para el día, el trabajo o cualquier momento en que quieras sentirte ligera y renovada." },
    { id: 14, name: "Imagination – Louis Vuitton", img: "imgs/img14.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Bergamota, notas verdes, ámbar, almizcle.", description: "Fresca, cítrica y con carácter, esta fragancia unisex combina una apertura vibrante con un fondo ambarino suave. Moderna y versátil para el uso diario." },
    { id: 15, name: "J'adore – Dior", img: "imgs/img15.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Ylang-ylang, rosa damascena, jazmín sambac.", description: "El floral icónico por excelencia. J'adore es puro lujo: luminoso, femenino y elegante, con un ramo floral que se siente como oro líquido sobre la piel." },
    { id: 16, name: "Bad Boy – Carolina Herrera", img: "imgs/img16.webp", category: "hombre", type: "Hombre", price: "Consultar", notes: "Pomelo, cacao, ambroxan, haba tonka.", description: "Masculina, moderna y audaz. Bad Boy combina un toque cítrico con un fondo dulce de cacao y ambroxan — un aroma con actitud para el hombre que rompe las reglas." },
    { id: 17, name: "Animale Eau de Parfum", img: "imgs/img17.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Flores blancas, almizcle, vainilla, maderas.", description: "Un floral almizclado cálido y envolvente, con esa calidez animal suave que le da su nombre. Sensual y de larga duración, perfecto para looks de noche." },
    { id: 18, name: "Dolce & Gabbana Light Blue", img: "imgs/img18.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Limón siciliano, manzana, cedro, almizcle blanco.", description: "El aroma del verano italiano en un frasco. Cítrico, afrutado y fresco, Light Blue evoca playas del Mediterráneo y días soleados — ligero y perfecto para el diario." },
    { id: 19, name: "Flower by Kenzo", img: "imgs/img19.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Amapola, violeta, vainilla.", description: "Poético y delicado, Flower by Kenzo combina un floral suave con un fondo dulce de vainilla. Romántico, ligero y con un carácter único entre los florales clásicos." },
    { id: 20, name: "Coach New York Wild Rose", img: "imgs/img20.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Rosa, frambuesa, pera, almizcle.", description: "Fresco y afrutado con el toque romántico de la rosa. Wild Rose transmite la energía despreocupada y chic de Nueva York — perfecto para el día a día urbano." },
    { id: 21, name: "Noa – Cacharel", img: "imgs/img21.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Lirio, jazmín, vainilla, cedro, almizcle.", description: "Minimalista y etéreo, Noa es un floral limpio con un fondo suave y sereno. Ideal para quien prefiere un aroma discreto pero con personalidad." },
    { id: 22, name: "Eilish – Billie Eilish", img: "imgs/img22.webp", category: "mujer", type: "Mujer", price: "Consultar", notes: "Azúcar, frutos rojos, mandarina, vainilla, cacao, especias, almizcle.", description: "Un gourmand ambarino dulce y profundo — más vainilla y menos azúcar de lo esperado. Cálido, envolvente y con una personalidad inconfundible, tal como su creadora." },

    // Hombre
    { id: 23, name: "Sauvage – Dior", img: "imgs/img23.webp", category: "hombre", type: "Hombre", price: "Consultar", notes: "Bergamota de Calabria, pimienta de Sichuan, ambroxan.", description: "Fresco, salvaje y magnético. Sauvage es el ícono masculino contemporáneo: una apertura cítrica explosiva sobre un fondo mineral y amaderado que se siente limpio y poderoso." },
    { id: 24, name: "Dolce & Gabbana Intenso", img: "imgs/img24.webp", category: "hombre", type: "Hombre", price: "Consultar", notes: "Canela, tabaco, ámbar.", description: "Cálido y especiado, con un carácter envolvente de tabaco y ámbar. Ideal para el hombre que busca un aroma con presencia en clima frío o eventos de noche." },
    { id: 25, name: "Versace Eros Energy Pour Homme", img: "imgs/img25.webp", category: "hombre", type: "Hombre", price: "Consultar", notes: "Menta, manzana verde, vetiver.", description: "Enérgico y fresco desde el primer momento, con un toque frutal-verde que se asienta en maderas secas. Deportivo, vibrante y perfecto para el día." },
    { id: 26, name: "Dior Homme", img: "imgs/img26.webp", category: "hombre", type: "Hombre", price: "Consultar", notes: "Iris, cuero, vetiver.", description: "Elegancia parisina en su forma más pura. Dior Homme combina el frescor polvoso del iris con un fondo de cuero suave — sofisticado, atemporal y distintivo." },
    { id: 27, name: "Jean Paul Gaultier Le Male Le Parfum", category: "hombre", type: "Hombre", price: "Consultar", notes: "Lavanda, vainilla, haba tonka.", description: "Una versión intensa y gourmand del clásico Le Male: lavanda fresca sobre un fondo dulce y cálido de vainilla. Seductor y con muchísima proyección." },
    { id: 28, name: "Valentino Uomo", category: "hombre", type: "Hombre", price: "Consultar", notes: "Avellana, cuero, haba tonka.", description: "Cálido y sofisticado, con un carácter de avellana tostada y cuero suave. Ideal para el hombre elegante que busca un aroma con carácter en otoño-invierno." },
    { id: 29, name: "Valentino Intense Uomo", category: "hombre", type: "Hombre", price: "Consultar", notes: "Avellana, cuero, haba tonka.", description: "La versión más envolvente e intensa del Uomo clásico: más cálida, más dulce, con mayor duración — para quien quiere dejar una huella imborrable." },
    { id: 30, name: "Allure Homme Sport – Chanel", category: "hombre", type: "Hombre", price: "Consultar", notes: "Notas cítricas, pimienta rosa, incienso.", description: "Fresco, deportivo y refinado a la vez. La firma de Chanel se siente en cada nota — perfecto para el hombre activo que no sacrifica la elegancia." },
    { id: 31, name: "Allure Homme Édition Blanche – Chanel", category: "hombre", type: "Hombre", price: "Consultar", notes: "Cardamomo, pimienta blanca, cedro blanco.", description: "Una versión más luminosa y etérea de Allure Homme, con un carácter limpio y ligeramente especiado. Discreto pero profundamente elegante." },
    { id: 32, name: "Platinum Égoïste Pour Homme – Chanel", category: "hombre", type: "Hombre", price: "Consultar", notes: "Mandarina, jazmín, sándalo.", description: "Un clásico moderno con un corazón floral inusual para un perfume masculino. Sofisticado, misterioso y con una calidez amaderada muy característica de Chanel." },
    { id: 33, name: "Égoïste Pour Homme – Chanel", category: "hombre", type: "Hombre", price: "Consultar", notes: "Sándalo, rosa, vainilla.", description: "Intenso y audaz, con un carácter amaderado-floral poco convencional. Un perfume de culto para el hombre con personalidad fuerte." },
    { id: 34, name: "Scandal – Jean Paul Gaultier", category: "hombre", type: "Hombre", price: "Consultar", notes: "Pomelo, lavanda, jengibre, pachulí.", description: "Provocador y fresco, con un giro especiado que lo hace diferente. Scandal invita a romper esquemas con un aroma juguetón y magnético." },
    { id: 35, name: "My Way – Giorgio Armani", category: "mujer", type: "Mujer", price: "Consultar", notes: "Azahar, jazmín, cedro blanco, ámbar.", description: "Cálido y limpio, con un carácter floral suave poco común en fragancias masculinas. My Way transmite calma, seguridad y autenticidad." },
    { id: 36, name: "Invictus Victory – Paco Rabanne", category: "hombre", type: "Hombre", price: "Consultar", notes: "Notas amaderadas, vainilla, ámbar gris.", description: "Potente y triunfal, con una firma dulce-amaderada muy actual. Invictus Victory es para el hombre que celebra cada logro con confianza." },
    { id: 37, name: "Azzaro The Most Wanted", category: "hombre", type: "Hombre", price: "Consultar", notes: "Cardamomo, coñac, haba tonka.", description: "Cálido, dulce y con carácter de licor añejo. The Most Wanted combina especias con un fondo gourmand que resulta irresistible y muy actual." },
    { id: 38, name: "Azzaro Pour Homme", category: "hombre", type: "Hombre", price: "Consultar", notes: "Anís, lavanda, cuero, vetiver.", description: "Un clásico atemporal de la perfumería francesa: fresco, herbal y con un fondo de cuero elegante. El aroma de un caballero de siempre." },
    { id: 39, name: "Fame – Rabanne (Intense)", category: "mujer", type: "Mujer", price: "Consultar", notes: "Vainilla, café, pachulí.", description: "Dulce, oscuro y con una intensidad magnética de café y vainilla. Fame Intense es audaz, moderno y perfecto para quien busca destacar de noche." },
    { id: 40, name: "Halloween Man", category: "hombre", type: "Hombre", price: "Consultar", notes: "Menta, cardamomo, cuero.", description: "Fresco con un giro misterioso: especias y menta sobre un fondo de cuero. Un aroma con personalidad, ideal para el hombre que no pasa desapercibido." },
    { id: 41, name: "Versace Blue Jeans Man", category: "hombre", type: "Hombre", price: "Consultar", notes: "Lavanda, menta, cedro.", description: "Fresco, casual y con un espíritu retro-noventero. Perfecto para el día a día, con un carácter limpio y juvenil." },
    { id: 42, name: "Prada Milano", category: "hombre", type: "Hombre", price: "Consultar", notes: "Bergamota, iris, ámbar.", description: "Refinado y minimalista, con la elegancia silenciosa que caracteriza a la casa Prada. Un aroma limpio, sofisticado y versátil." },
    { id: 43, name: "Coach Platinum Eau de Parfum", category: "hombre", type: "Hombre", price: "Consultar", notes: "Pimienta rosa, cuero, sándalo.", description: "Moderno y con carácter, combina un toque especiado con un fondo de cuero suave y sándalo cálido. Elegancia urbana para el hombre contemporáneo." },
    { id: 44, name: "Versace Dylan Blue", category: "hombre", type: "Hombre", price: "Consultar", notes: "Toronja, bergamota negra, ámbar acuático.", description: "Fresco, acuático y con una firma cítrica muy reconocible. Perfecto para climas cálidos y días largos, con muy buena proyección." },
    { id: 45, name: "Explorer Ultra Blue", category: "hombre", type: "Hombre", price: "Consultar", notes: "Bergamota, pimienta rosa, vetiver, ámbar.", description: "Fresco y aventurero, con un carácter amaderado-acuático que evoca horizontes abiertos. Versátil y de gran duración, ideal para el uso diario." },
    { id: 46, name: "Afnan 9am", category: "unisex", type: "Unisex", price: "Consultar", notes: "Bergamota, cardamomo, vainilla, ámbar, almizcle.", description: "Cálido, dulce y con un carácter oriental accesible. 9am combina especias suaves con un fondo ambarino que lo hace perfecto para el uso diario y de oficina." },
    { id: 47, name: "Halloween", category: "mujer", type: "Mujer", price: "Consultar", notes: "Menta, lavanda, especias, cuero.", description: "Misterioso y especiado, con un toque fresco al inicio que se transforma en un fondo cálido de cuero. Un aroma con carácter, perfecto para quien busca algo diferente." },

    // Unisex / Nicho
    { id: 48, name: "Maison Barakkat – Extrait de Parfum", category: "unisex", type: "Unisex / Nicho", price: "Consultar", notes: "Almendra amarga, azafrán, jazmín, cedro, ámbar gris, almizcle.", description: "Opulento y adictivo, con esa combinación inconfundible de almendra dulce y flores blancas sobre un fondo ambarino-amaderado. Un extrait de larga duración pensado para dejar huella." },
    { id: 49, name: "Le Labo Santal 33", category: "unisex", type: "Unisex / Nicho", price: "Consultar", notes: "Sándalo, cardamomo, cuero, ámbar gris, violeta.", description: "Icónico y de culto. Santal 33 combina la calidez cremosa del sándalo con un toque de cuero especiado — un aroma unisex de carácter fuerte y muy reconocible al instante." },
    { id: 50, name: "Erba Pura (Xerjoff) – Unisex", category: "unisex", type: "Unisex / Nicho", price: "Consultar", notes: "Piña, melón, frutos cítricos, almizcle, ámbar.", description: "Jugoso, afrutado y adictivo. Erba Pura es puro verano en un frasco: dulce, fresco y con una potente estela almizclada que lo hace perfecto para destacar en cualquier clima." },

    // Línea Árabe
    { id: 51, name: "Al Haramain Amber Oud Aqua Dubai", category: "arabe", type: "Línea Árabe", price: "Consultar", notes: "Bergamota, notas verdes, mandarina, melón, piña, ámbar, grosella negra, almizcle, vainilla.", description: "Fresco y afrutado con un fondo ambarino suave — perfecto para quien busca un toque de la costa de Dubái en un aroma versátil, unisex y de gran duración como extrait de parfum." },
    { id: 52, name: "Qaed Al Fursan – Lattafa", category: "arabe", type: "Línea Árabe", price: "Consultar", notes: "Piña, azafrán, jazmín, abeto balsámico, ámbar, cedro, oud.", description: "Oriental amaderado con un giro afrutado inesperado gracias a la piña y el azafrán. Fuerte, elegante y de gran proyección — un favorito indiscutible de la perfumería árabe accesible." },

    // Bharara Viking
    { id: 53, name: "Bharara Viking Cairo", category: "bharara", type: "Bharara Viking", price: "Consultar", notes: "Bergamota, naranja, limón, madera de cachemira, ámbar gris.", description: "Cítrico, especiado y cálido — como un atardecer en un mercado de El Cairo. Fresco al inicio, amaderado y sensual al final." },
    { id: 54, name: "Bharara Viking Kashmir", category: "bharara", type: "Bharara Viking", price: "Consultar", notes: "Cardamomo, incienso, jazmín, lirio, vainilla, sándalo.", description: "Especiado y floral con una base amaderada profunda de sándalo. Un aroma sofisticado que conecta con las raíces cálidas y terrosas de Cachemira." },
    { id: 55, name: "Bharara Viking Rio", category: "bharara", type: "Bharara Viking", price: "Consultar", notes: "Notas tropicales, frutas, flores blancas, maderas cálidas.", description: "Vibrante y tropical, como el espíritu festivo de Río de Janeiro. Afrutado, floral y con una calidez amaderada que invita al buen humor." },
    { id: 56, name: "Bharara Viking Dubai", category: "bharara", type: "Bharara Viking", price: "Consultar", notes: "Bergamota, jengibre, madera de cachemira, flores blancas, magnolia.", description: "Lujoso y magnético — la fragancia más buscada de la colección Viking. Cítrico y especiado con un fondo amaderado elegante que evoca el brillo de Dubái." },
    { id: 57, name: "Bharara King", category: "bharara", type: "Bharara Viking", price: "Consultar", notes: "Notas amaderadas y ambaradas intensas.", description: "Imponente y con carácter de líder. Bharara King combina fuerza y elegancia en un aroma amaderado profundo, ideal para quien busca hacerse notar." }
];

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');

    grid.innerHTML = '';

    if (productsToRender.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    grid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    productsToRender.forEach(perfume => {
        const message = encodeURIComponent(`Hola, me gustaría recibir información sobre precios, tamaños y disponibilidad del perfume ${perfume.name}.`);
        const priceMessage = encodeURIComponent(`Hola, me gustaría recibir información sobre precios, tamaños y disponibilidad del perfume ${perfume.name}.`);
        const waUrl = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${message}` : '#';
        const waPriceUrl = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${priceMessage}` : '#';

        const card = document.createElement('div');
        card.className = 'product-card';
        // Add click listener to open modal, except if they click the WA button directly
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-whatsapp') && !e.target.classList.contains('product-price-link')) {
                openModal(perfume);
            }
        });

        card.style.cursor = 'pointer';

        const imgSrc = `imgs/img${perfume.id}_thumb.webp`;
        const imgHTML = `
            <div class="skeleton-loader"></div>
            <img src="${imgSrc}" alt="${perfume.name}" class="product-img" loading="lazy" 
                 onload="this.classList.add('loaded'); this.previousElementSibling.style.display='none';"
                 onerror="this.onerror=null; this.previousElementSibling.style.display='none'; this.outerHTML='<div class=\\'product-img-placeholder\\'></div>';">
        `;

        card.innerHTML = `
            <div class="product-img-wrapper">
                ${imgHTML}
            </div>
            <div class="product-info">
                <span class="product-category">${perfume.type}</span>
                <h3 class="product-name">${perfume.name}</h3>
                <span class="product-volume">Disponible en múltiples presentaciones</span>
                <a href="${waPriceUrl}" class="product-price-link" target="_blank" rel="noopener noreferrer">Consultar</a>
                <a href="${waUrl}" class="btn-whatsapp" ${WHATSAPP_NUMBER ? 'target="_blank" rel="noopener noreferrer"' : 'onclick="alert(\'Número de WhatsApp no configurado aún.\'); return false;"'}>
                    Pedir por WhatsApp
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            document.getElementById('searchInput').value = '';

            const filterValue = e.target.getAttribute('data-filter');

            if (filterValue === 'all') {
                renderProducts(perfumes);
            } else {
                const filtered = perfumes.filter(p => p.category === filterValue);
                renderProducts(filtered);
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm !== '') {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        } else {
            document.querySelector('[data-filter="all"]').classList.add('active');
        }

        const filtered = perfumes.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.type.toLowerCase().includes(searchTerm)
        );

        renderProducts(filtered);
    });
}

function setupModal() {
    const modal = document.getElementById('productModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const overlay = document.querySelector('.modal-overlay');

    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

function openModal(perfume) {
    const modal = document.getElementById('productModal');

    // Fill data
    document.getElementById('modalCategory').textContent = perfume.type;
    document.getElementById('modalName').textContent = perfume.name;

    // Modal image
    const modalImageContainer = document.getElementById('modalImageContainer');
    if (modalImageContainer) {
        modalImageContainer.style.position = 'relative';
        const imgSrc = `imgs/img${perfume.id}.webp`;
        modalImageContainer.innerHTML = `
            <div class="skeleton-loader"></div>
            <img src="${imgSrc}" alt="${perfume.name}" class="modal-product-img product-img" 
                 onload="this.classList.add('loaded'); this.previousElementSibling.style.display='none';"
                 onerror="this.onerror=null; this.previousElementSibling.style.display='none'; this.outerHTML='<div class=\\'product-img-placeholder\\'></div>';">
        `;
    }

    // Update WA link for price
    const priceMessage = encodeURIComponent(`Hola, me gustaría recibir información sobre precios, tamaños y disponibilidad del perfume ${perfume.name}.`);
    document.getElementById('modalPrice').innerHTML = `<a href="https://wa.me/${WHATSAPP_NUMBER}?text=${priceMessage}" target="_blank" rel="noopener noreferrer" class="product-price-link">Consultar Precio</a>`;

    document.getElementById('modalNotes').textContent = perfume.notes;
    document.getElementById('modalDesc').textContent = perfume.description;

    // Update WA link
    const waBtn = document.getElementById('modalWaBtn');
    const message = encodeURIComponent(`Hola, me gustaría recibir información sobre precios, tamaños y disponibilidad del perfume ${perfume.name}.`);

    if (WHATSAPP_NUMBER) {
        waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
        waBtn.onclick = null;
    } else {
        waBtn.href = "#";
        waBtn.onclick = (e) => {
            e.preventDefault();
            alert("Número de WhatsApp pendiente de configurar.");
        };
    }

    // Show modal and prevent body scrolling
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

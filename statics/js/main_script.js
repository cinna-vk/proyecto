document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const searchInput = document.getElementById('busqueda');
    const hiringBanner = document.querySelector('.hiring-banner');
    const closeHiringBanner = document.querySelector('.close-hiring-banner');
    const heroSection = document.getElementById('heroCarousel');

    // --- 1. Control del Menú Móvil ---
    if (menuButton && mobileMenu && closeMenuButton) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
        });

        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    }

    // --- 2. Simulación de Carrusel (Cambio de fondo) ---
    // Nota: Como solo hay una imagen, esto solo es un placeholder de la funcionalidad
    const slides = [
        '../statics/img/hero_bike.jpg', // La imagen actual
        // Agrega más URLs de imágenes aquí para que realmente rote
        // '../statics/img/hero_running.jpg', 
        // '../statics/img/hero_swim.jpg', 
    ];
    let currentSlideIndex = 0;

    function nextSlide() {
        if (slides.length <= 1) return; // No hacer nada si solo hay una imagen

        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        const nextImageUrl = slides[currentSlideIndex];
        
        // Simulación: cambiar la imagen de fondo del slide actual
        // En un carrusel real, se crearía y animaría un nuevo slide
        const currentSlideElement = heroSection.querySelector('.current-slide');
        if (currentSlideElement) {
            currentSlideElement.style.backgroundImage = `url(${nextImageUrl})`;
        }
    }

    // Cambiar cada 5 segundos (comentar si solo quieres la imagen estática)
    // setInterval(nextSlide, 5000); 

    // --- 3. Placeholder de la función de Búsqueda ---
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log(`Buscando evento: ${searchInput.value}`);
                // Aquí iría la lógica para redirigir o filtrar resultados
            }
        });
    }

    // --- 4. Control del Banner de Contratación ---
    if (closeHiringBanner && hiringBanner) {
        closeHiringBanner.addEventListener('click', () => {
            hiringBanner.style.display = 'none';
        });
    }
});
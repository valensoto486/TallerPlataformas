
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    // Cambiar de imagen cada 6 segundos
    setInterval(showNextSlide, 6000);
});

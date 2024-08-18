
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

    // Manejo del formulario
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario
        
        const formData = new FormData(form);

        fetch('https://formspree.io/f/xldrbwnq', { 
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('¡Gracias por suscribirte!'); // Mensaje de que funciono
                form.reset(); // Limpiar el formulario
            } else {
                alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.'); // Mensaje de error
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.'); // Mensaje de error
        });
    });
});


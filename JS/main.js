//BASE MUY BASICA DE UN SCRIPT PARA EL MANEJO DE ENVIO DE FORMULARIOS
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario

        const email = document.getElementById('email').value;
        
        // Aquí podrías enviar el email a un servidor o procesarlo de alguna manera
        alert(`Gracias por suscribirte con el email: ${email}`);
        
        form.reset(); // Limpia el formulario
    });
});

// Registro del service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch((error) => {
                console.error('Error al registrar el Service Worker:', error);
            });
    });
}
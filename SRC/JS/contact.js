document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    fetch(this.action, {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => response.json())
    .then(data => {
        alert('¡Mensaje enviado con éxito! en breve te contactaremos');
        this.reset(); // Limpia el formulario
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con el envío del formulario.');
    });
});

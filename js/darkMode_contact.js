document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle img'); // Selecciona el ícono de la luna
    const themeLink = document.getElementById('theme-style');

    // Cargar el tema preferido desde localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        themeLink.setAttribute('href', currentTheme);
    } else {
        themeLink.setAttribute('href', 'css/contact.css'); // Establece el light mode por defecto
    }

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = themeLink.getAttribute('href');
        const newTheme = currentTheme === 'css/contact.css' ? 'css/contact.dark.css' : 'css/contact.css';
        themeLink.setAttribute('href', newTheme);
        localStorage.setItem('theme', Theme); // Guarda el tema seleccionado en localStorage
        currentTheme = newTheme;
    });
});




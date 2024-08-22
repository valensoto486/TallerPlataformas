document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle img'); // Selecciona el ícono de la luna
    const themeLink = document.getElementById('theme-style');

    // Cargar el tema preferido desde localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        themeLink.setAttribute('href', currentTheme);
    } else {
        themeLink.setAttribute('href', 'css/register.css'); // Establece el light mode por defecto
    }

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = themeLink.getAttribute('href');
        const newTheme = currentTheme === 'css/register.css' ? 'css/register.dark.css' : 'css/register.css';
        themeLink.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme); // Guarda el tema seleccionado en localStorage
    });
});
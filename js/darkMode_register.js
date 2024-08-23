document.getElementById("botonStilos").addEventListener("click", function() {
    const themeLink = document.getElementById("theme-style");
    const currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "css/register.css") {
        themeLink.setAttribute("href", "css/register.dark.css"); // Cambia al estilo oscuro
    } else {
        themeLink.setAttribute("href", "css/register.css"); // Vuelve al estilo original
    }
});
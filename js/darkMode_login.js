document.getElementById("botonStilos").addEventListener("click", function() {
    const themeLink = document.getElementById("theme-style");
    const currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "css/login.css") {
        themeLink.setAttribute("href", "css/login.dark.css"); // Cambia al estilo oscuro
    } else {
        themeLink.setAttribute("href", "css/login.css"); // Vuelve al estilo original
    }
});
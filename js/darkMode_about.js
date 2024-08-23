document.getElementById("botonStilos").addEventListener("click", function() {
    const themeLink = document.getElementById("theme-style");
    const currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "css/about.css") {
        themeLink.setAttribute("href", "css/about.dark.css"); // Cambia al estilo oscuro
    } else {
        themeLink.setAttribute("href", "css/about.css"); // Vuelve al estilo original
    }
});




document.getElementById("botonStilos").addEventListener("click", function() {
    const themeLink = document.getElementById("theme-style");
    const currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "css/main.css") {
        themeLink.setAttribute("href", "css/main.dark.css"); // Cambia al estilo oscuro
    } else {
        themeLink.setAttribute("href", "css/main.css"); // Vuelve al estilo original
    }
});




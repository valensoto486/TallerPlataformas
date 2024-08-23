document.getElementById("botonStilos").addEventListener("click", function() {
    const themeLink = document.getElementById("theme-style");
    const currentTheme = themeLink.getAttribute("href");

    if (currentTheme === "css/contact.css") {
        themeLink.setAttribute("href", "css/contact.dark.css"); // Cambia al estilo oscuro
    } else {
        themeLink.setAttribute("href", "css/contact.css"); // Vuelve al estilo original
    }
});




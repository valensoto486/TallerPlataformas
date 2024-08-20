document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const themeLink = document.getElementById("theme-link");
    
    // Verifica el tema actual y aplica el modo oscuro si es necesario
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        themeLink.href = "css/main.dark.css";
    } else {
        themeLink.href = "css/main.css";
    }

    toggleButton.addEventListener("click", function() {
        if (themeLink.href.includes("main.css")) {
            themeLink.href = "css/main.dark.css";
            localStorage.setItem("theme", "dark");
        } else {
            themeLink.href = "css/main.css";
            localStorage.setItem("theme", "light");
        }
    });
});
import { getUserFromStorage } from './storage.js';

// Función para validar la sintaxis del correo electrónico
function validarCorreo(correo) {
    // Expresión regular para validar la sintaxis del correo
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

document.getElementById("frm_login").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    const correo = document.getElementById("correo").value.trim(); // Obtener y limpiar espacios en blanco
    const clave = document.getElementById("clave").value.trim(); // Obtener y limpiar espacios en blanco

    // Validar correo electrónico
    if (!validarCorreo(correo)) {
        // Mostrar mensaje de error si el correo es inválido
        const errorCorreo = document.querySelector("#correo + .invalid-feedback");
        errorCorreo.textContent = "Ingresa un correo válido";
        errorCorreo.style.display = "block";
        return;
    } else {
        // Ocultar mensaje de error si el correo es válido
        const errorCorreo = document.querySelector("#correo + .invalid-feedback");
        errorCorreo.style.display = "none";
    }

    // Obtener el usuario desde el localStorage
    const usuario = getUserFromStorage();

    // Verificar si el usuario existe y las credenciales son correctas
    if (usuario && correo === usuario.correo && clave === usuario.clave) {
        // Redirigir al index.html si el login es exitoso
        window.location.href = "index.html";
    } else {
        // Mostrar mensaje de error si el login falla
        alert("Correo o contraseña incorrectos");
    }
});

import { saveUserToStorage } from './storage.js';

let btn_enviar, nombre, correo, celular, clave, formulario;

window.onload = function () {
    iniciarRegistro();
}

function iniciarRegistro() {
    btn_enviar = document.getElementById("btn_enviar");
    nombre = document.getElementById("nombre");
    correo = document.getElementById("correo");
    celular = document.getElementById("celular");
    clave = document.getElementById("clave");
    formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", procesarRegistro);
}

function procesarRegistro(evento) {
    evento.preventDefault();

    if (formulario.checkValidity()) {
        let txt_correo = correo.value;
        let txt_nombre = nombre.value;
        let txt_celular = celular.value;
        let txt_clave = clave.value;

        let usuario = {
            correo: txt_correo,
            nombre: txt_nombre,
            celular: txt_celular,
            clave: txt_clave
        };

        saveUserToStorage(usuario);

        alert("Registro exitoso");
        formulario.reset();
    } else {
        formulario.classList.add('was-validated');
    }
}

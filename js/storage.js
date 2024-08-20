// Función para guardar los datos del usuario en localStorage
export function saveUserToStorage(usuario) {
    if (!usuario) {
        console.error("No se puede guardar un usuario vacío.");
        return;
    }
    const str_usuario = JSON.stringify(usuario);
    localStorage.setItem("usuario", str_usuario);
}

// Función para obtener los datos del usuario desde localStorage
export function getUserFromStorage() {
    const usuario = localStorage.getItem("usuario");
    if (usuario === null) {
        console.log("No hay entradas en el local storage.");
        return null; // Aquí puedes manejar el caso cuando no hay entradas en localStorage.
    }
    return JSON.parse(usuario);
}

// Función para eliminar los datos del usuario de localStorage
export function removeUserFromStorage() {
    localStorage.removeItem("usuario");
    console.log("Usuario eliminado del local storage.");
}
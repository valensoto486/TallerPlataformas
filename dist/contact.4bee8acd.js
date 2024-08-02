document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    fetch(this.action, {
        method: "POST",
        body: new FormData(this)
    }).then((response)=>response.json()).then((data)=>{
        alert("\xa1Mensaje enviado con \xe9xito! en breve te contactaremos");
        this.reset(); // Limpia el formulario
    }).catch((error)=>{
        console.error("Error:", error);
        alert("Hubo un problema con el env\xedo del formulario.");
    });
});

//# sourceMappingURL=contact.4bee8acd.js.map

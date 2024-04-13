function enviarMensaje() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    // Validar campos de entrada (puedes agregar tu lógica de validación aquí)
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return;
    }
    
    // Datos a enviar al servidor
    var datos = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };
    
    // Enviar mensaje mediante una solicitud POST
    fetch("url_del_servidor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al enviar el mensaje.");
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        // Manejar la respuesta del servidor (puedes mostrar un mensaje de éxito al usuario)
        console.log("Mensaje enviado con éxito:", data);
    })
    .catch(error => {
        console.error("Error:", error.message);
        // Mostrar un mensaje de error al usuario
    });
}

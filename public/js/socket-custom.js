var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

//Escuchar Informacion
socket.on('disconnect', function() {
    console.log('Perdimos Conexion con el servidor');
})

//Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'ebros',
    mensaje: 'hola Mundo'
}, function(resp) {
    console.log("Respuesta Servidor: ", resp);
})


//Escuchar Informacion
socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor: ', respuesta);
})
const { io } = require('../server')
io.on('connection', (client) => {
    console.log('usuario Conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: "Bienvenido a esta aplicacion"
    })
    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    })

    //Escuchar el Cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);

    })
})
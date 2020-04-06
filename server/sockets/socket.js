const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar al cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        /*
        if (mensaje.usuario) {
            callback({
                respuesta: 'Todo salio BIEN!'
            });
        } else {
            callback({
                respuesta: 'Todo salio MAL!!!!'
            });
        }*/

    });

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

});
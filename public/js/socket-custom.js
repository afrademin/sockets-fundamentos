        var socket = io();

        socket.on('connect', function() {

            console.log('Conectado al servidor');
        });

        // Escuchar

        socket.on('disconnect', function() {

            console.log('Perdimos conexion con el servidor');

        });


        //Enviar información
        /*
                socket.emit('enviarMensaje', {
                    usuario: 'Emin',
                    mensaje: 'Hola mundo'
                }, function(respuesta) {
                    console.log('respuesta server:', respuesta);
                });*/


        // Escuchar información

        socket.on('enviarMensaje', function(mensaje) {
            console.log('Servidor:', mensaje);
        })
var socketIO = require('socket.io');

module.exports.listen = function (server) {
    var io = socketIO(server);

    var form = io.of('/form');
    // var index = io.of('/');

    form.on('connection', function(socket){
        console.log('a user connecteddd');

        socket.on('offerCreated', function(msg){
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            form.emit('offerCreated', msg);
        });

        // io.emit("aaaa", "its working");

        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });

    // index.on('connection', function (socket) {
    //     console.log('welkom');
    //
    //     socket.on('chat message', function(msg){
    //         io.emit('chat message', msg);
    //     });
    //
    //     socket.on('disconnect', function(){
    //         console.log('ha det bra');
    //     });
    // });

    return io;
};
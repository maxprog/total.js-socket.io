require('total.js')

var socketio = require('socket.io');

F.on("load", function() {
this.io = socketio.listen(this.server);


this.io.on('connection',function(socket){
console.log('New connection');

socket.on('message',function(data){
    console.log(data);
    socket.broadcast.emit('receive',data.message);

    });
});
});

F.http('debug');
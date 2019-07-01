const Message = require('../db/models/message');
const Channel = require('../db/models/channel');

module.exports = io => {

  io.on('connection', socket => {

    console.log(socket.id, ' has made a persistent connection to the server!');

    socket.on('new-message', message => {
      console.log("new message from frontend", message);
      socket.broadcast.emit('new-message', message);
    });

    socket.on('new-channel', channel => {
      socket.broadcast.emit('new-channel', channel);
    });

    socket.on('disconnect', () => {
      console.log(socket.id, "has left the chatroom")
    });

  });

};

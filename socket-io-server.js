var express = require('express');
var http = require('http');
var socket_io = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socket_io(server);

io.on('connection', function(socket) {
  socket.on('server_msg', function(msg) {
    io.emit('client_msg', msg);
  });
});

//setting public folder to server static files
app.use(express.static(__dirname + '/public'));

//seerve html file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//running server
server.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
})

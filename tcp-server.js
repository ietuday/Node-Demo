var net = require('net');

//Creating TCP Server

var server = net.createServer(function(socket) {
    console.log('Client Connected');

      socket.on('data', function(data) {
        console.log('Client Data', data.toString());
      });

      socket.end('end',function() {
      console.log('client data');
      });

      //Shutting down the Server

      socket.on('close', function() {
        console.log('server closed');
      });

      socket.on('error',function(err) {
        console.log('server error', err);
      });

      socket.write('Hello World!\r\n');

});


server.listen(8081, function() {
  console.log('Server is listening at 8081');
});

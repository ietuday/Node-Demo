var net = require('net');

//Creating TCP clients

var client = net.connect({port:8081}, function() {
  console.log('Connected to server');
});

client.on('connect', function() {
  //Writing your request
  client.write('Hello from client1');

});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('disconnected from server');
});

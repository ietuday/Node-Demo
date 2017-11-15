var fs = require('fs');
var https = require('https');

//read the private key and certificate at given path

var options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.key')
};

https.createServer(options,function(req,res) {
  res.writeHead(200, {"Content-Type":"text/html"});
  res.write("<h1>Hello, Node.js Https Server</h1>");
  res.end();
}).listen(8081);

console.log('Server is running at: https://localhost:8081');

var http = require('http');

http.createServer(function(req,res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<h1>Hello, Node Js Server");
  res.end();
}).listen(8081);

console.log('Server is running at http://localhost:8081');

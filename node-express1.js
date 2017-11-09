var express = require("express");
var http = require("http");

var app = express();

app.use(function(request,response){
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.end("Hello World\n");
});

http.createServer(app).listen(1337);

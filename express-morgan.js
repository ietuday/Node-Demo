var express = require("express");
var logger = require("morgan");
var http = require("http");
var app = express();

app.use(logger());

app.use(function(request,response){
  response.writeHeader(200,{"Content-Type":"text/plain"});
  response.end("Hello World\n");
});

http.createServer(app).listen(1337);

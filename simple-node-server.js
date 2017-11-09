var http = require("http");

var app = http.createServer(function(request,response){
  // response.writeHead(200,{"Content-Type":"text/plain"});
  // response.end("Hello World");
  var answer = "";
answer += "Request URL: " + request.url + "\n";
answer += "Request type: " + request.method + "\n";
answer += "Request headers: " + JSON.stringify(request.headers) + "\n";

// Send answer
response.writeHead(200, { "Content-Type": "text/plain" });
response.end(answer);
});

app.listen(1337,"localhost");
console.log("Server running at http://localhost:1337");


// var http = require("http");
//
// http.createServer(function(req, res) {
//   // Homepage
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Welcome to the homepage!");
//   }
//
//   // About page
//   else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Welcome to the about page!");
//   }
//
//   // 404'd!
//   else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 error! File not found.");
//   }
// }).listen(1337, "localhost");

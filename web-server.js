var http = require("http");
var server = http.createServer(function(request,response){
  response.writeHead(200,{"Content-Type":"text/html"});
  // response.write("<!DOCTYPE "html">");
  console.log("Request : ",request);
  console.log("Response : ",response);
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page </title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello world");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(7000);

console.log("Server is listening");

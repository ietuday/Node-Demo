// Express provides an efficient way to manage and handle routes in a web application. Express provides
// methods like get(), post(), put(), delete(), and so on to deal with HTTP verbs – get, post, put and delete respectively.
// All of these methods take the first parameter as representing URL and a sequence of middleware as arguments.
// Let’s see the examples to create routes in express.

var express = require('express');
var app = express();

app.get('/',function(req, res) {
  res.write('This is Home Page');
  res.end();
});

//route for about us Page

app.get('/about', function(req, res) {
  res.send('<h1>This is about us page</h1>');
  // res.write('This is about Page');
  // res.end();

});

var port = process.env.port || 1305;

app.listen(port);

console.log('Server is running at http://localhost:'+port);

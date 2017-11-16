// A middleware is a chain of functions which are executed before the request is being processed. It can be
// used for various operations like user authentication, logging etc.

//What is Connect

//Connect is an extensible HTTP server framework built on the top of node’s http. It offers higher level APIs
// for common HTTP server functionality like session management, authentication, logging and more.

// You can think connect as a stack of middlewares. You can create a server using connect as given below:


var connect = require('connect');
var app = connect();

app.use('/', function(req, res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end('This is connect middleware');
});

var port = process.env.port || 1301;
app.listen(port);

console.log('Server is running at http://localhost:' + port);



// The best and most powerful node.js web development frameworks to build real time and scalable web
// applications with ease are given below:
// MVC frameworks
// 1)Express
// 2)Koa
// 3)Hapi
// 4)Sails
// 5)Nodal

// Full-stack frameworks
// 1.Meteor
// 2.Derby.js
// 3.MEAN.IO
// 4.MEAN.js
// 5.Keystone
// 6.Horizon


// The best and most powerful node.js REST API frameworks to build a fast Node.js REST API server with
// ease are given below:
// Restify
// LoopBack
// ActionHero
// Fortune.js

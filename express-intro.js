// Express is a web development framework for Node.js. Express is used to build single (SPA), multipage
// (MPA) and hybrid web applications and REST API using Node.js.

// Express is built on the top of http and connect. Express is based on Ruby’s Sinatra framework.

// You should use Express because provides following features:
// 1)Parses the arguments and headers
// 2)Supports Routing
// 3)Supports multiple view engines like Jade, EJS, JSHtml etc.
// 4)Handle Configurations
// 5)Supports Sessions
// 6)Supports Content Negotiation
// 7)Supports Error Handling
// 8)Supports Multiple Databases
// o RDBMS – MySQL, MS SQL etc.
// o NoSQL – MongoDB, Firebase, Redis etc.

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.write('Hello, Express');
  res.end();
});
console.log(process.env.port);
var port = process.env.port || 1305;

app.listen(port);
console.log('Server is running at http://localhost:', + port);

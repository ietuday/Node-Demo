var express = require('express');

//get an instance of router

var router = express.Router();
var app = express();

//home page route

router.get('/',function(req, res) {
  res.send('This is a Home Page');
});


//About page route


router.get('/about',function(req, res) {
  res.send('This is a About us Page');
});

//apply the routes to our application

app.use('/',router);

//running Server

var port = process.env.port || 1305;

app.listen(port);

console.log('Server is running on http://loccalHost:',+port);

// Koa is a node.js web framework developed by the team of Express. Koa is smaller, more expressive, and
// more robust framework from Express. Koa uses generators via co to efficiently deal with call backs and increase
// error-handling capabilities.
// Koa does not use middleware. It provides a set of methods that make writing servers fast and enjoyable.

var koa = require('koa');
var app = new koa();

app.use(function *(){
  this;//context
  this.request;//koa request
  this.response;// koa response
  this.body = '<h2>Koa Server</h2>'
});

var port = process.env.port || 1305;

app.listen(port);

console.log('Server is running at http://localhost',+port);

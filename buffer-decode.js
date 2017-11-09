// Creating buffer from string
var buffer = new Buffer('Hello World!');

//by default encoding is utf8
console.log(buffer.toString());
console.log(buffer.toString('ascii'));
console.log(buffer.toString('binary'));
console.log(buffer.toString('hex'));
console.log(buffer.toString('base64'));

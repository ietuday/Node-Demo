// Streams Piping is a way to pass output of one stream as an input to another stream. Node.js provides
// pipe() function for this purpose.
// The pipe() function attaches a readable stream to a writable stream for passing the data from one stream to
// another stream. Let's understand it with an example, here we are reading the data from input.txt and writing it to
// another file output.txt.

var fs = require('fs');
var rs = fs.createReadStream('input.txt');
var ws = fs.createWriteStream('output.txt');

rs.pipe(ws);//streams piping

//Handling events: end and error

rs.on('end',function() {
  console.log("Copy has been completed");
  debugger;
  ws.end();//mark end
})

rs.on('error',function(err) {
  console.log(err.stack);
});

var fs = require('fs');
var stream = fs.createReadStream('./input.txt');

stream.on('data',function(chunk) {
  console.log(chunk);
  stream.pause();
  console.log('Wait for 1 Second......');
  setTimeout(function() {
    console.log('Data start flowing again.....');
    stream.resume();
  },1000);
});

stream.on('end',function() {
  console.log('finished');
});

stream.on('close',function() {
  console.log('close');
});

stream.on('error',function(err) {
  console.log(err.stack);
});

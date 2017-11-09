var fs = require('fs');
var stream = fs.createReadStream('./input.txt');

//Flowing Mode: Stream Pause is not possible

stream.on('data', function(chunk) {
  console.log(chunk);
  //Pausing stream
  stream.pause();
  console.log('wait for 5 second.......');
  setTimeout(function() {
    console.log('data start flowing again........');
    stream.resume();
  },5000);
});

stream.on('end', function(){
  console.log('Finished');//No more data to read
});

stream.on('close', function(){
  console.log('Closed');//file has been closed
});

stream.on('error', function(){
  console.log(err.stack);
});

var fs = require('fs');
var stream = fs.createReadStream('./input.txt');

// non-flowing mode: stream pause is not possible

stream.on('readable', function() {
  //read chunk by chunk
  var chunk;
  while((chunk = stream.read()) !== null){
    console.log(chunk);
  }
});

stream.on('end', function() {
  console.log('Finished');//no more data to receive
});

stream.on('close', function() {
  console.log('closed');//no more data to receive
});

stream.on('error', function(err) {
  console.log(err.stack);//no more data to receive
});

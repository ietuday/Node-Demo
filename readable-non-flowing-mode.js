var fs = require('fs');
var stream = fs.createReadStream('./input.txt');

//Non- Flowing Mode: Stream Pause is not possible

stream.on('readable', function() {
  //read chunk by chunk
  var chunk;
  while((chunk = stream.read()) !== null){
    console.log(chunk);
  }
});

stream.on('end', function(){
  console.log('Finished');
});

stream.on('close', function(){
  console.log('Closed');
});

stream.on('error', function(){
  console.log(err.stack);
});

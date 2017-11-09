var fs = require("fs");
var data = 'This data is from writable stream!';

//Create a writable stream

var ws = fs.createWriteStream('output.txt');

//Write the data to stream with encoding to be utf8

ws.write(data,'utf8');

//mark the end of file: no more data to read

ws.on('finish', function() {
  console.log('Write Finished');
});

ws.on('error',function(err) {
  console.log(err.stack);
})

var fs = require('fs');
var rs = fs.createReadStream('./input.txt');
var ws = fs.createWriteStream('./output2.txt');

rs.pipe(ws);//Streams piping

rs.on('end',function() {
    console.log('Copy has been completed');
    ws.end();
});

rs.on('error',function() {
  console.log(err.stack);
});

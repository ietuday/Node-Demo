var fs = require("fs");
var path = './fs.txt';

//Open file at given path to read('r' - read mode)

fs.open(path, 'r', function(err, fd) {
    fs.fstat(fd,function(err, stats){
      var totalBytes = stats.size;
      var bytesRead = 0;
      var buffer = new Buffer(totalBytes);

      //Each Call to ensure that chunk sie is not too small and not to large
      var chunkSize = Math.min(512, totalBytes);
      while (bytesRead < totalBytes) {
        //for reading last chunk
        if ((bytesRead + chunkSize) > totalBytes) {
          chunkSize = totalBytes - bytesRead;
        }
        //reading the file byte by byte
        fs.read(fd,buffer, bytesRead, chunkSize, bytesRead, error);
        bytesRead += chunkSize;
      }

      function error(err) {
        if(err){
          console.log("File read Aborted!!!");
          console.log(err);
          fs.close(fd, function() {
            console.log("File Closed");
          });
        }
      }

      fs.close(fd, function() {
        console.log("File Closed");
      });

      console.log("File read Completed");

      console.log("Total bytes read : ", +totalBytes);

      //Display  on Screen
      console.log(buffer.toString());
    });
});

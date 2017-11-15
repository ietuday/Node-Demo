var fs = require("fs");

//Fetching an entire file at once

fs.readFile("./text.txt","utf8",function(err,data) {
    if(err){
      console.log(err);
    }else {
      console.log(data);
    }
});


//Open file and write to\ it byte by byte

fs.open('fs-write.txt','w',function(err,fd) {
    var buffer = new Buffer('This is a File System write Operation');
    var totalBytes = buffer.length;
    var bytesWrite = 0;

    //Each call to ensure that chunk size is not too small; not too large
    var chunkSize = Math.min(15, totalBytes);
    while (bytesWrite < totalBytes) {
        //for writing last chunk
        if((bytesWrite + chunkSize) > totalBytes){
            chunkSize = Math.min(512, (totalBytes - bytesWrite));
        }

        //writing the file byte by byte
        fs.write(fd, buffer, bytesWrite, chunkSize, bytesWrite, error);
        bytesWrite += chunkSize;
    }
    function error(err) {
        if(err){
            console.log("File write aborted");
            console.log(err.stack);
            fs.close(fd);
        }
    }
    fs.close(fd);
    console.log("File write Completed");
    console.log("Total bytes Written : ", totalBytes);
});

//Write to file at Once

fs.writeFile('fs-write2.txt', "fs write operation", "utf8", function(err) {
    if(err){
        return console.log(err);
    }else {
        console.log("File has been written");
    }
})

var fs = require("fs");

fs.stat('./fs.txt', function(err, stats) {
  if (err) {
    if(err.code == 'ENOENT'){
      console.log('Does not exist');
    }else {
      if(stats.isFile()){
        console.log('File Found');
      }else if(stats.isDirectory()){
        console.log('Directory found');
      }
    }
  }
});

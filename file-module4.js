var fs = require('fs');

//reading directory attributes

var path = '/home/uday';
fs.readdir(path, function(err, files) {
  if(err){
    console.log(err);
  }else {
    files.forEach(function(file) {
      var filepath = path + "/" + file;
      fs.stat(filepath, function(err, stats) {
        console.log(filepath);
        console.log(stats);
      });
    });
  }
});

//Make a new directory

var path = '/home/uday/nodecreatedTestDir';

fs.mkdir(path, 0666, function(err) {
  if(err){
    console.log(err.stack);
  }else {
    console.log('Created test dir');
  }
});

var path2 = '/home/uday/nodecreatedTestDir'; //existing dir_name

//remove directory at given path

fs.rmdir(path2, function(err) {
  if(err){
    console.log(err.stack);
  }else {
    console.log('Removed test dir');
  }
});

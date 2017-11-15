var fs = require("fs");
var path= "./fs1.txt";

//read the attribute of a file
fs.stat(path, function(err, stats) {
  console.log(stats);
});

// appended
fs.appendFile('./fs-write.txt','\nAppended Data', function(err) {
  if(err) throw err;
  console.log("Append Completed");
});

//renamed
fs.rename('./fs-write.txt', './fs-write.bak', function(err) {
if(err) throw err;
console.log('Rename Completed');
});

//moving file

fs.rename('./fs-write.txt', './content/fs-write.txt', function(err) {
 if(err) throw err;
 console.log('Move Completed');
})

//Deleted

fs.unlink('./fs-write.bak', function(err) {
  if(err) throw err;
  console.log('Deleted Sucessfully');
});

//Changed Permission
fs.chmod('./content/fs-write.txt',444, function(err) {
  if(err) throw err;
  console.log('Changed Permission');
});

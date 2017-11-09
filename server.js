var fs = require("fs");

// var data = fs.readFileSync("input.txt");//Blockig Code

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

// console.log(data.toString());

console.log("Program Ended");

// Creating buffer from size=2
var buf = new Buffer(2);
buf[0] = 0;
buf[1] = 1;

console.log(buf);
console.log(buf.length);

// Creating buffer from array
var arr = [1, 2, 3];
var buff = new Buffer(arr);
console.log(buff);

//Creating buffer from string
var buffer = new Buffer('Hello World');
console.log(buffer);
console.log(buffer.length);

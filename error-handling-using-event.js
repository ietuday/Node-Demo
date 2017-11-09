// In Node.js you can use Event Emitters to emit errors. Event emitters come with native
// support for error event. So, instead of throwing the errors emit it when the errors happen and the caller will
// listen for error event on the emitter.
// This way is useful when your single operation might create multiple errors or multiple results and when a lot
// of different asynchronous operations are happening.

var events = require('events');
var emitter = new events.EventEmitter();

function async() {
  process.nextTick(function() {
    //This emits the "error" event
    emitter.emit("error",new Error("Something went wrong"));
  });
  return emitter;
}

//Calling async

var event = async();
event.on('error', function(error) {
  //When the "error" event is emitted, this is called
  console.log(error);
});

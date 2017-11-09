// Node.js core API are based on asynchronous event-driven architecture. Node.js uses events module for
// event handling. The events module exposes EventEmitter class to deal with events.
// In Node, objects that generate events are called event emitters. All objects that emit events are instances of the
// EventEmitter class. Event Emitters are based on publish/subscribe pattern. EventEmitter class provides Listeners
// for listing events and Emitters for emitting events

var events = require("events");
var emitter = new events.EventEmitter();

//listening 'docall' event
emitter.on('docall', function() {
  console.log('ring ring ring');
});

//emitting 'docall' event
emitter.emit("docall");


// A readable stream supports following five events.
// data - This is event is emitted when the data is available to read in flowing mode. In flowing mode, you
// can pause and resume streams.
// readable - This is event is emitted when the data is available to read in non-flowing mode.
// end - This is event is emitted when there is no more data to read.
// close - This is event is emitted when the stream and any of its underlying resources (like a file descriptor)
// have been closed. This event also indicates that no more events will be emitted.
// error - This is event is emitted when there is any error while receiving or writing data.

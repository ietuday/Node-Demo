// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

let command = process.argv[2]
// console.log('Process.argv : ',process.argv);
// console.log('yargs: ',yargs.argv);
var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note',{
       title: titleOptions,
       body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title:titleOptions
    })
    .command('remove', 'Remove a note', {
        title:titleOptions
    })
    
    .help()
    .argv;
// console.log("abc",argv._[0]);

if (command === 'add') {
    console.log('Adding new note');
    var note = notes.addNotes(argv.title, argv.body);
    if(note){
        console.log('note created');
        notes.logNote(note);         
    }else{
        console.log('Note title taken');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
    
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
    console.log('note found');
    notes.logNote(note);
    }else{
        console.log('note not found');        
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found!';
    console.log(message);
}else{
    console.log('Command not recognized');
    
}




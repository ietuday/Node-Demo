console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

let command = process.argv[2]
console.log('Process.argv : ',process.argv);
console.log('yargs: ',yargs.argv);
   
const argv = yargs.argv;
console.log("abc",argv._[0]);

if (command === 'add') {
    console.log('Adding new note');
    var note = notes.addNotes(argv.title, argv.body);
    if(note){
        console.log('Note Create');
        console.log('----------------------');
        console.log(`Tittle: ${note.title}`);
        console.log(`Body: ${note.body}`);       
               
    }else{
        console.log('Note title taken');
    }
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Command not recognized');
    
}




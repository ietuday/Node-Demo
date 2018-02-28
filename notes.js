// console.log('Starting Notes.js');

const fs = require('fs');

    var fetchNotes = () => {
        try{
            var notesString = fs.readFileSync('notes-data.json');
            return JSON.parse(notesString);
        }catch(e){
            console.log(e);
            return [];
        }
    };

    var saveNotes = (notes) => {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
    };

    var addNotes = (title, body) => {
    console.log('Adding note',title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };  
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
    }
   
   
};

var getAll = () =>{
   return fetchNotes(); 
};

var getNote = (title) =>{
    var notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
    
};

var removeNote = (title) =>{
    var notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title)
    //save new notes array
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('note found');
    console.log('----------------------');
    console.log(`Tittle: ${note.title}`);
    console.log(`Body: ${note.body}`);      
};

module.exports = {
    addNotes,
    getAll,
    getNote,
    removeNote,
    logNote
}
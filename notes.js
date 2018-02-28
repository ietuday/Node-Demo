console.log('Starting Notes.js');

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
    console.log('Getting all Notes');
    
};

var getNote = (title) =>{
    console.log('Getting Note', title);
    
};

var removeNote = (title) =>{
    
    
};


module.exports = {
    addNotes,
    getAll,
    getNote,
    removeNote
}
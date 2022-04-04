const Model = require("./model");
const NotesView = require("./notesView");
console.log("The notes app is running");

const model = new Model();
const notesView = new NotesView(model);
model.addNote('buy cheese');
notesView.displayNotes();
console.log(model.getNotes());


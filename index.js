const Model = require("./model");
const NotesView = require("./notesView");
console.log("The notes app is running");

const model = new Model();
const notesView = new NotesView(model);
// model.addNote('This is an example note');
// notesView.displayNotes();
// console.log(model.getNotes());


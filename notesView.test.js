/**
*@jest-environment jsdom
*/

const fs = require('fs');

const Model = require("./model");
const NotesView = require("./notesView")

describe('NotesView', () => {
  it('displayNotes should return 2 notes', () => {
document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new Model();
    const notesView = new NotesView(model);
    model.addNote('buy chicken');
    model.addNote('wash car');
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
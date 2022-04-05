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

  it('if ca;;ed twice, displayNotes should still return 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new Model();
    const notesView = new NotesView(model);
    model.addNote('buy chicken');
    model.addNote('wash car');
    notesView.displayNotes();
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it("displays a user's note", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model2 = new Model();
    const notesView2 = new NotesView(model2);
    const userInput = document.querySelector('#user-input');
    const button = document.querySelector('#new-note');
    userInput.value = 'Hello';
    button.click();
    const note = document.querySelector('.note');
    expect(note.innerText).toBe('Hello');
  });
});
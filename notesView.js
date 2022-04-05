class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.button = document.querySelector('#new-note')
    this.noteText = document.querySelector('#user-input')
    this.button.addEventListener('click', () => {
      this.model.addNote(this.noteText.value);
      this.displayNotes();
      this.noteText.value = '';
    });
  }

  displayNotes() {
    const notes = this.model.getNotes()
    const displayedNotes = document.querySelectorAll('.note')
    displayedNotes.forEach(note => {
      note.remove();
    })
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView;
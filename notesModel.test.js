const Model = require('./model.js')

describe('Model', () => {
    it('initialises with an empty array', () => {
        const model = new Model()
        expect(model.getNotes()).toEqual([])
    });
    it('getNotes returns the notes', () => {
        const model = new Model()
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym'])
    });
    it('.reset clears the notes', () => {
      const model = new Model()
      model.addNote('Buy milk');
      model.addNote('Go to the gym');
      model.reset()
      expect(model.getNotes()).toEqual([])
    });
});
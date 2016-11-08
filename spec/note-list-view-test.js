function isTextCorrect() {


note = new Note('Test text entry');
list = new NoteList();
list.addNote(note);
note1 = new Note('second test');
list.addNote(note1);

 if (note.printText() === 'Test text entry', 'second test') {
   console.log('Test passed');
 } else {
   console.log('Test failed');
 }



}

isTextCorrect();

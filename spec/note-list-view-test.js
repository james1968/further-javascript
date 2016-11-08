function isTextCorrect() {


    var list = new NoteList();
    var note = new Note('Test text entry for the first note');
    var note1 = new Note('second test for the second note');
    var noteListView = new NoteListView();

    list.addNote(note);
    list.addNote(note1);

    if (note.printText() === 'Test text entry', 'second test') {
        console.log('Test passed');
    } else {
        console.log('Test failed');
    }
    
    var htmlstring = '<ul><li><div>Test text entry for the first note</div></li><li><div>second test for the second note</div></li></ul>';
    if (noteListView.returnhtml(list) === htmlstring) {
        console.log('Note List displayed');
    } else {
        console.log('Notes list not displayed');
    }


}

isTextCorrect();

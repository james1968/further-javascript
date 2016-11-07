function testsForNoteListModel() {
    var list = new NoteList();
    var text0 = "Javascript is a wonderful language and the easiest to learn and ;everybody loves it."
    list.newNote(text0);
    if (list.notes[0].text === text0) {
        console.log('notes saved');
    } else {
        throw new Error('note not saved');
    }

    var text1 = "Ruby's also cool.";
    list.newNote(text1);
    var text2 = "I love CSS.";
    list.newNote(text2);
    if (list.allNotes().length === 3) {
        console.log('correct number of notes saved');
    } else {
        throw new Error('wrong number of notes saved - ' + list.notes.length);
    }
}

testsForNoteListModel();
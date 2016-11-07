function testsNoteListModel() {
    var list = new NoteList();
    var text = "Javascript is a wonderful language and the easiest to learn and ;everybody loves it."
    list.newNote(text);
    if (list.notes[0].text === text) {
        console.log('notes saved')
    } else {
        throw new Error('note not saved')
    }
}

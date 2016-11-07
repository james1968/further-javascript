(function(exports) {

    function NoteList() {
        this.notes = [];
    }

    NoteList.prototype.newNote = function(text) {
        note = new Note();
        note.enterText(text);
        this.notes.push(note);
    }

    exports.NoteList = NoteList;
    exports.newNote = this.newNote;
})(this);
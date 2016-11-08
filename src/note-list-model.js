(function(exports) {

    function NoteList() {
        this.notes = [];
    }

    NoteList.prototype.newNote = function(text) {
        note = new Note(text);
        this.notes.push(note);
    };

    NoteList.prototype.addNote = function(note) {
        this.notes.push(note);
    };

    NoteList.prototype.allNotes = function() {
        return this.notes;
    };

    exports.NoteList = NoteList;
    exports.newNote = this.newNote;
    exports.allNotes = this.allNotes;
})(this);

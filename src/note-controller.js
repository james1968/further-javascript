(function(exports) {
function NoteController(listFromNoteListModel) {

    var noteList = new NoteListView();
    var htmlullist = noteList.returnhtml(listFromNoteListModel);
    return document.getElementById('app').appendChild(htmlullist);
}
exports.NoteController = NoteController;
})(this);

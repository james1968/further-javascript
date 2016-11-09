window.onload = function() {
    var noteListView = new NoteListView();
    var noteController = new NoteController();
    return noteController(noteListView.returnhtml(list));
}
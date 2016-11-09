function noteControllerTest() {

  var noteListView = new NoteListView();
  var noteController = new NoteController(noteListView.returnhtml(list));
  var result = '<ul><li><div>Test text entry for the first note</div></li><li><div>second test for the second note</div></li></ul>';
  if (document.getElementById('app') == result){
    console.log('Note List displayed');
  } else {
    throw new Error('Notes list not displayed');
  }
}

window.onload = function() {
  noteControllerTest();
}
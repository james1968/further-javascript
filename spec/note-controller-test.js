function noteControllerTest() {

  var noteController = new NoteController(NoteListView.returnhtml(list));
  var result = '<ul><li><div>Test text entry for the first note</div></li><li><div>second test for the second note</div></li></ul>';
  if (document.getElementById('app') == result){
    console.log('Note List displayed');
  } else {
    throw new Error('Notes list not displayed');
  }
}

noteControllerTest();

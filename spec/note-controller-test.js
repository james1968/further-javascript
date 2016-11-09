function noteControllerTest() {

  new NoteController(list);
  var result = '<li><div>Test text entry for the first note</div></li><li><div>second test for the second note</div></li>';
  if (document.getElementById('app').lastChild.innerHTML == result){
    console.log('Note List displayed');
  } else {
    throw new Error('Notes list not displayed');
  }
}

window.onload = function() {
  noteControllerTest();
};

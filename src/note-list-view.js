function NoteListView() {

NoteListView.prototype.returnhtml = function(notesList) {
  var array = notesList.allNotes();
  var list = document.createElement('ul');

  for(var i = 0; i < array.length;i++) {

    var item = document.createElement('li');
    item.appendChild(document.createTextNode(array[i].printText()));
    list.appendChild(item);
    }
    console.log(list);
  return list;

};

}

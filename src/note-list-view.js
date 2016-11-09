(function(exports) {

function NoteListView() {

NoteListView.prototype.returnhtml = function(notesList) {
  var array = notesList.allNotes();
  var list = document.createElement('ul');

  for(var i = 0; i < array.length;i++) {

    var item = document.createElement('li');
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(array[i].printText()));
    item.appendChild(div);
    list.appendChild(item);
    }
    console.log(list);
  return list;

};

}
exports.NoteListView = NoteListView;

})(this);

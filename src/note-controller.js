window.onload = function(){
    var appDiv = document.getElementById('app');
    console.log(appDiv);
    appDiv.appendChild(view.returnhtml(list));
};


var note = new Note('Favourite drink: selzer');
var list = new NoteList();
var view = new NoteListView();
list.addNote(note);
console.log(list);
view.returnhtml(list);

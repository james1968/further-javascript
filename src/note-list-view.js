function NoteListView() {



NoteListView.prototype.returnhtml = function (list) {


    for(i=0;i<list.allNotes().length;i++) {

    console.log('<ul><li><div>'+list.allNotes()('</div></li><li><div>')+'</div></li></ul>');

    }
};
}

(function(exports) {

function SingleNoteView() {

SingleNoteView.prototype.returnhtml = function(note) {


    var list = document.createElement('ul');
    var item = document.createElement('li');
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(note.printText()));
    item.appendChild(div);
    list.appendChild(item);
    console.log(list);
  
};

}
exports.SingleNoteView = SingleNoteView;

})(this);

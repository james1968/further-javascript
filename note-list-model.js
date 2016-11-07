function noteListModel () {

	this.notes = [];

}

	noteListModel.prototype.addNote = function(note) {

		this.notes.push(note)

	};

	noteListModel.prototype.printList = function() {

		for(i=0;i<this.notes.length;i++) {

		element = document.createElement('p');
		element.innerHTML = this.notes[i].text;
		document.getElementById('noteList').appendChild(element);
		
		}
	};

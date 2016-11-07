function isTextCorrect() {
	document.getElementById('noteText').value = "some text"
	note = new Note();
	if (note.getText() === "some text") {
		console.log('is text correct: true')
	} else {
		console.log('is text correct: failed');
	}
}

isTextCorrect()
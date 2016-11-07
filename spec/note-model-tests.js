function testsForNote() {
    var text = "Javascript is a wonderful language and the easiest to learn and everybody loves it.";
    var note = new Note(text);

    if (note.printText() !== text) {
        throw new Error('note does not contain text');
    } else {
      console.log('note contains text')
    }

    if (note.printAbbreviation().length > 20) {
        throw new Error('abbreviation is too long! Max 20 characters.');
    } else {
      console.log('yay')
    }
};


testsForNote();

function testsForNote() {
    var note = new Note();
    var text = "Javascript is a wonderful language and the easiest to learn and ;everybody loves it.";
    note.text = text;
    
    if (note.text !== text) {
        throw new Error('note does not contain text');
    }

    if (note.abbreviation.length > 20) {
        throw new Error('abbreviation is too long! Max 20 characters.');
    }
};


testsForNote();

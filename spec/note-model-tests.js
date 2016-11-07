function testForNoteType() {
    var note = new Note();
    if (typeof note !== Note) {
        throw new Error('note is not a Note');
    }
};

testForNoteType();

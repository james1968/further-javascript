function isNoteCorrect() {


    if (note.printText() === 'Test text entry for the first note') {
        console.log('Test passed');
    } else {
        console.log('Test failed');
    }

    var result = '<ul><li><div>Test text entry for the first note</div></li><ul>';
    if (sview.returnhtml(note) == result){
      console.log('Note List displayed');
    } else {
      throw new Error('Notes list not displayed');
    }

}

isNoteCorrect();

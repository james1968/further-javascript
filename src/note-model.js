(function(exports) {

    function Note(text) {
        this.text = text;
        this.abbreviation = text.substring(0,19);
    }

    Note.prototype.printText = function(text) {
        return this.text;
    };

    Note.prototype.printAbbreviation = function () {
        return this.abbreviation;
    };

    exports.Note = Note;
    exports.printText = this.printText;
    exports.printAbbreviation = this.printAbbreviation;
})(this);
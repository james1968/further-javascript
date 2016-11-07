(function(exports) {

    function Note() {
        this.text;
        this.abbreviation;
    }

    Note.prototype.enterText = function(text) {
        this.text = text;
        this.abbreviation();
    };

    Note.prototype.abbreviation = function () {
        this.abbreviation = this.text.substring(0,19);
    };

    exports.Note = Note;
    exports.enterText = this.enterText;
    exports.abbreviation = this.abbreviation;
})(this);
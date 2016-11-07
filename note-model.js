function Note() {
	this.text = "something";
}

(function(exports) {
	Note.prototype.getText = function() {
		return this.text;
	};
})(this);
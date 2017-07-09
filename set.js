var Set = (function() {
	var arr = Symbol("");

	function Set() {
		this[arr] = [];
	}

	Set.prototype.add = function(object) {
		if (this.find(object)) {
			return false;
		}
		this[arr].push(object);
	};

	Set.prototype.find = function(object) {
		if (typeof object !== "string") {
			throw new ArgumentTypeError(object);
		}
		if (this[arr].indexOf(object) === -1) {
			return false;
		}
		return true;
	};

	Set.prototype.getElement = function(index) {
		return this[arr][index];
	};

	Set.prototype.remove = function(from, to) {
		if (from < 0 || from > to) {
			throw new InvalidArgumentError("from = " + from);
		}
		if (to <= 0 || to >= this[arr].length) {
			throw new InvalidArgumentError("to = " + to);
		}
		return this[arr].splice(from, to - from);
	};

	Set.prototype.sortSet = function() {
		this[arr].sort();
	};

	Set.prototype.getSet = function() {
		return this[arr].slice(0);
	};

	return Set;
}());

function InvalidArgumentError(argument) {
	this.name = "InvalidArgumentError";
	this.massege = "invalid argument " + argument;
	this.argument = argument;
	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, InvalidArgumentError);
	} else {
		this.stack = (new Error()).stack;
	}
}
InvalidArgumentError.prototype = new Error();
InvalidArgumentError.prototype.constructor = InvalidArgumentError;

function ArgumentTypeError(argument) {
	this.name = "ArgumentTypeError";
	this.massege = "Argument (" + argument + ") isn't a string";
	this.argument = argument;
	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, ArgumentTypeError);
	} else {
		this.stack = (new Error()).stack;
	}
}
ArgumentTypeError.prototype = new Error();
ArgumentTypeError.prototype.constructor = ArgumentTypeError;

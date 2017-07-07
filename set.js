var Set = (function() {
	var arr = Symbol("");

	function Set() {
		this[arr] = [];
	}

	Set.prototype.add = function(object) {
		if (this.find(object)) {
			throw new RepeatingArgumentError(object);
		}
		this[arr].push(object);
	};

	Set.prototype.find = function(object) {
		if (typeof object !== "string") {
			throw new ArgumentNotStringError(object);
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

function ArgumentNotStringError(argument) {
	this.name = "ArgumentNotStringError";
	this.massege = "Argument (" + argument + ") isn't a string";
	this.argument = argument;
	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, ArgumentNotStringError);
	} else {
		this.stack = (new Error()).stack;
	}
}
ArgumentNotStringError.prototype = new Error();
ArgumentNotStringError.prototype.constructor = ArgumentNotStringError;

function RepeatingArgumentError(argument) {
	this.name = "RepeatingArgumentError";
	this.massege = "Argument (" + argument + ") already exists";
	this.argument = argument;
	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, RepeatingArgumentError);
	} else {
		this.stack = (new Error()).stack;
	}
}
RepeatingArgumentError.prototype = new Error();
RepeatingArgumentError.prototype.constructor = RepeatingArgumentError;

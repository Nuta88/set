var Set = (function() {
	var arr = Symbol("");

	function Set() {
		this[arr] = [];
	}

	Set.prototype.add = function(object) {
		if (this.find(object)) {
			throw new Error("An existing object mustn't be added to array!");
		}
		this[arr].push(object);
	};

	Set.prototype.find = function(object) {
		if (typeof object !== "string") {
			throw new Error("Object can't be not a string!");
		}
		if (this[arr].indexOf(object) === -1) {
			return false;
		}
		return true;
	};

	Set.prototype.getElement = function(index) {
		return this[arr][index];
	};

	Set.prototype.delElement = function(from, to) {
		if (from < 0 || to <= 0 || from > to) {
			return [];
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

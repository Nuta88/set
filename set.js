var Set = (function() {
	var arr = Symbol("");

	function Set() {
		this[arr] = [];
	}

	Set.prototype.add = function(object) {
		if (this.find(object)) {
			return -1;
		}
		this[arr].push(object);
	}; 

	Set.prototype.find = function(object) {
		if (typeof object !== "string") {
			return -1;
		}
		if (this[arr].indexOf(object) === -1) {
			return false;
		}
		return true;
	};

	Set.prototype.getElemByIndex = function(index) {
		if (this[arr].length < index) {
			return -1;
		}
		return this[arr][index];
	};

	Set.prototype.delElemFromAArr = function(startIndex, deleteCountElem) {
		this[arr].splice(startIndex, deleteCountElem);
	};

	Set.prototype.sortArr = function() {
		this[arr].sort();
	};

	Set.prototype.getArr = function() {
		return this[arr].slice(0);
	};

	return Set;
}());

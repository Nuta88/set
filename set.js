function Set() {
	var arr = [ "ah", "3" ];

	this.getArr = arr;

	this.add = function(element) {
		if (this.find(element)) {
			return -1;
		}

		arr.push(element);
	};

	this.find = function(element) {
		if (typeof element !== "string") {
			return -1;
		}

		if (arr.indexOf(element) === -1) {
			return false;
		}

		return true;
	};

	this.getElemByIndex = function(index) {
		if (arr.length < index) {
			return -1;
		}

		return arr[index];
	};

	this.delElemFromAArr = function(startIndex, deleteCountElem) {
		arr.splice(startIndex, deleteCountElem);
	};
	
	this.sortArr = function() {
		function compareNumeric(a, b) {
			  if (a > b) return 1;
			  if (a < b) return -1;
			}

			arr.sort(compareNumeric);
	}
};

var set = new Set();


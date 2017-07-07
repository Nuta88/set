QUnit.test("add method test", function(assert) {
	var expected = [ "love", "cat" ];
	var set = new Set();
	set.add("love");
	set.add("cat");
	assert.deepEqual(set.getSet(), expected, "Two arrays must be the same in value");
});

QUnit.test("RepeatingArgumentError", function(assert) {
	set = new Set();
	function runAdd() {
		set.add("love");
		set.add("love");
	}
	assert.throws(runAdd, RepeatingArgumentError, "Check RepeatingArgumentError");
});

QUnit.test("find method test", function(assert) {
	var expected = true;
	var set = new Set();
	set.add("love");
	set.add("cat");
	assert.deepEqual(set.find("love"), expected, "Does array contain a value?");
});

QUnit.test("ArgumentNotStringError", function(assert) {
	set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	function runFind() {
		set.find(4);
	}
	assert.throws(runFind, ArgumentNotStringError, "Check ArgumentNotStringError");
});

QUnit.test("getElement method test", function(assert) {
	var expected = "silly";
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	assert.deepEqual(set.getElement(1), expected, "Gets element by index");
});

QUnit.test("getElement method return an 'undefined' test", function(assert) {
	var expected = undefined;
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	assert.deepEqual(set.getElement(6), expected, "Does the method return an 'undefined'?");
});

QUnit.test("return remove method test", function(assert) {
	var expected = [ "love" ];
	set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	var actual = set.remove(0, 1);
	assert.deepEqual(actual, expected, "Method must return deleted element");
});

QUnit.test("InvalidArgumentError", function(assert) {
	set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");

	function runRemove() {
		set.remove(1, 10);
	}
	assert.throws(runRemove, InvalidArgumentError, "Check InvalidArgumentError");
});

QUnit.test("remove method test", function(assert) {
	var expected = [ "silly", "cat" ];
	set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	set.remove(0, 1);
	var actual = set.getSet();
	assert.deepEqual(actual, expected, "Two arrays must be the same in value");
});

QUnit.test("sort method test", function(assert) {
	var expected = [ "amazing", "cat", "love", "silly" ];
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	set.add("amazing");
	set.sortSet();
	assert.deepEqual(set.getSet(), expected, "Two arrays can be the same in value");
});

QUnit.test("getSet method test", function(assert) {
	var expected = [ "love", "silly", "cat", "amazing" ];
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	set.add("amazing");
	assert.deepEqual(set.getSet(), expected, "Two arrays can be the same in value");
});

QUnit.test("add method test", function(assert) {
	var expected = ["love", "cat"];
	var set = new Set();
	set.add("love");
	set.add("cat");
	assert.deepEqual(set.getSet(), expected,
			"Two arrays must be the same in value");
});

QUnit.test("find method test",
		function(assert) {
			var expected = true;
			var set = new Set();
			set.add("love");
			set.add("cat");
			assert.deepEqual(set.find("love"), expected,
					"Does array contain a value?");
		});

QUnit.test("getElement method test", function(assert) {
	var expected = "silly";
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	assert.deepEqual(set.getElement(1), expected, "Do get element?");
});

QUnit.test("method return an 'undefined' test", function(assert) {
	var expected = undefined;
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	assert.deepEqual(set.getElement(6), expected,
			"Does the method return an 'undefined'?");
});

QUnit.test("return delElement method test", function(assert) {
	var expected = ["love"];
	set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	var actual = set.delElement(0, 1);
	assert.deepEqual(actual, expected, "Method must return deleted element");
});

QUnit.test("delElement method test", function(assert) {
	var expected = ["silly", "cat"];
	set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	set.delElement(0, 1);
	var actual = set.getSet();
	assert.deepEqual(actual, expected, "Two arrays must be the same in value");
});

QUnit.test("sort method test", function(assert) {
	var expected = ["amazing", "cat", "love", "silly"];
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	set.add("amazing");
	set.sortSet();
	assert.deepEqual(set.getSet(), expected,
			"Two arrays can be the same in value");
});

QUnit.test("getSet method test", function(assert) {
	var expected = ["love", "silly", "cat", "amazing"];
	var set = new Set();
	set.add("love");
	set.add("silly");
	set.add("cat");
	set.add("amazing");
	assert.deepEqual(set.getSet(), expected,
			"Two arrays can be the same in value");
});

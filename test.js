QUnit.test("add method", function(assert) {
	var expected = [ "love", "cat" ];
	var actual = new Set();
	actual.add("love");
	actual.add("cat");
	assert.deepEqual(actual.getArr(), expected,
			"Two arrays can be the same in value");
});

QUnit.test("find method", function(assert) {
	var expected = true;
	var actual = new Set();
	actual.add("love");
	actual.add("cat");
	assert.deepEqual(actual.find("love"), expected,
			"The array contains a value");
});

QUnit.test("method of get elements by index ", function(assert) {
	var expected = "silly";
	var actual = new Set();
	actual.add("love");
	actual.add("silly");
	actual.add("cat");
	assert.deepEqual(actual.getElemByIndex(1), expected,
			"The array contains an index");
});

QUnit
		.test(
				"method of delete elements",
				function(assert) {
					var expected = [ "silly", "cat" ];
					actual = new Set();
					actual.add("love");
					actual.add("silly");
					actual.add("cat");
					actual.delElemFromAArr(0, 1)
					assert
							.deepEqual(actual.getArr(), expected,
									"The value deleted from array. Two arrays can be the same in value");
				});

QUnit.test("sort method", function(assert) {
	var expected = [ "amazing", "cat", "love", "silly" ];
	var actual = new Set();
	actual.add("love");
	actual.add("silly");
	actual.add("cat");
	actual.add("amazing");
	actual.sortArr();
	assert.deepEqual(actual.getArr(), expected,
			"Two arrays can be the same in value");
});

QUnit.test("method of obtaining an array", function(assert) {
	var expected = [ "love", "silly", "cat", "amazing" ];
	var actual = new Set();
	actual.add("love");
	actual.add("silly");
	actual.add("cat");
	actual.add("amazing");
	assert.deepEqual(actual.getArr(), expected,
			"Two arrays can be the same in value");
});

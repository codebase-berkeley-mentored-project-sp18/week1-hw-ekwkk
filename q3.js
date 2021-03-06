/*
Question 3 - JavaScript Objects
================================
JavaScript is not an object-oriented language. Despite that, it does have "objects"
that are more similar to dictionaries in Python and should be thought of as such.

The following function takes in a non-null object that may contain other objects.
It should return the maximum depth to which objects are nested.

Example:
>>> getObjectNestingDepth({})
--> 1
>>> getObjectNestingDepth({ "key1": 1, "key2": 2 })
--> 1
>>> getObjectNestingDepth({
      "lvl1": {
        "lvl2": {
          "lvl3": "END"
        }
      }
    })
--> 3
*/
function getObjectNestingDepth(inputObject) {
	var arrayOfKeys = Object.keys(inputObject);
	var counter = [];
	if (arrayOfKeys.length === 0) {
		return 1;
	} else {
		for (var i = 0; i < arrayOfKeys.length; i++) {
			if (typeof inputObject[arrayOfKeys[i]] !== "object") {
				counter.push(1);
			} else {
				counter.push(1 + getObjectNestingDepth(inputObject[arrayOfKeys[i]]));
			}
		}
	}
	return Math.max.apply(Math, counter);
}

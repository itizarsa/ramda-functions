/*
! Has function

* has("name", { name: "alice" }); //=> true

* has("name", { name: "one" }); //=> true

* has("name", {}); //=> false

*/

const arg1 = "name";
const arg2 = { name: "one" };

const hasKey = (a, b) => {
	// Extract keys from the Object
	let keys = Object.keys(b);

	// If the object has key return true
	// If object doesnt have key return false
	return keys.includes(a) ? true : false;
};

console.log(hasKey(arg1, arg2));

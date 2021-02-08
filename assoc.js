/*
! Assoc function

* const result = assoc("c", 3, { a: 1, b: 2 });

* console.log(result); //=> {a: 1, b: 2, c: 3}

*/

const str = "c";
const num = 3;
const obj = { a: 1, b: 2 };

const assoc = (a, b, c) => {
	// Adding the value in object by key
	let locObj = { ...c };
	locObj[a] = b;

	// Return the modified object
	return locObj;
};

console.log(assoc(str, num, obj));

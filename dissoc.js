/*
! Dissoc function

* dissoc("b", { a: 1, b: 2, c: 3 }); //=> {a: 1, c: 3}

*/

const key = "b";
const obj = { a: 1, b: 2, c: 3 };

const dissoc = (a, b) => {
	// Shallo Clone Object using ES6 spread operator
	let locObj = { ...b };
	// Removing the key from the obbject
	delete locObj[a];
	return locObj;
};

console.log(dissoc(key, obj));

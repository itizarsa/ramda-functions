/*
! Drop function

* drop(1, ["foo", "bar", "baz"]); //=> ['foo', 'baz']

*/

const position = 1;
const myArr = [ "foo", "bar", "baz" ];

const drop = (a, b) => {
	// Clone Array using ES6 spread operator
	let locArr = [ ...b ];
	// Removing the array element by given value
	locArr.splice(a, 1);
	return locArr;
};

console.log(drop(position, myArr));

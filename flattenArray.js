/* 
! Flatten function

* flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])

* => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

*/

const myArr = [ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8, [ 9, [ 10, 11 ], 12 ] ] ] ];

const flatten = (nestedArr) => {
	// Initial Value for Reduce Method
	let initValue = [];

	// Using reduce array method on the given input
	return nestedArr.reduce((total, value) => {
		// If the value is not an array concat the values to the initValue array
		// If the value is an array recursively calling the flatten function
		return total.concat(Array.isArray(value) ? flatten(value) : value);
	}, initValue);
};

console.log(flatten(myArr));

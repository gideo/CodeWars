// 6kyu - Get all array elements except those with specified indexes

// Description:

// Extend the array object with a function to return all elements of that array, except 
// the ones with the indexes passed in the parameter.

// For example:

// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except([1,3]);
// // array2 should contain ['a', 'c', 'e'];
// The function should accept both array as parameter but also a single integer, 
// like this:

// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except(1);
// // array2 should contain ['a', 'c', 'd', 'e'];

Array.prototype.except = function(keys) {
  return this.filter((_, i) => keys[0] ? !keys.some((a) => i == a) : keys != i);
}
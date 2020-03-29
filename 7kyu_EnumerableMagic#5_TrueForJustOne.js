// 7kyu - Enumerable Magic #5 - True for Just One

// Task
// Create a function called one that accepts two params:

// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one item in the sequence.

// Example
// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false
// Ruby: If you need help, here's a reference:

// http://www.rubycuts.com/enum-one

let one = (arr,fun) => arr.filter(fun).length == 1;
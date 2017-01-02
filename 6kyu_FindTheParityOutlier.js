// 6 kyu - Find the Parity Outlier

// Description:

// You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. The array is either entirely comprised 
// of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns N.

// For example:

// [2, 4, 0, 100, 4, 11, 2602, 36]

// Should return: 11

// [160, 3, 1719, 19, 11, 13, -21]

// Should return: 160

let even = num => num % 2 === 0;

let odd = num => Math.abs(num % 2) == 1;

let findOutlier = ints => ints.slice(0,3).filter(even).length > 1 ? ints.find(odd) : ints.find(even);

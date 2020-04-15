// 7kyu - Sort Rectangles and Circles by Area II

// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
// This kata inspired by Sort rectangles and circles by area.

let sortByArea = a => a.slice().sort((a, b) => area(a) - area(b));
let area = a => Array.isArray(a) ? a[0]*a[1] : Math.PI*a*a;
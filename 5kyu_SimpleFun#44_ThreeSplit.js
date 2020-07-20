// 5kyu - Simple Fun #44: Three Split 

// Task
// You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

// Example
// For a = [0, -1, 0, -1, 0, -1], the output should be 4.

// Here are all possible ways:

// [0, -1] [0, -1] [0, -1]
// [0, -1] [0, -1, 0] [-1]
// [0, -1, 0] [-1, 0] [-1]
// [0, -1, 0] [-1] [0, -1]
// Input/Output
// [input] integer array a

// Constraints: 5 ≤ a.length ≤ 1000, -10000 ≤ a[i] ≤ 10000

// [output] an integer

// It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

function threeSplit(ns) {
  const sum = ns.reduce( (x, y) => x + y, 0 );
  let a = 0, b = 0, c = 0, acc = 0;
  
  for ( const n of ns ) {
    c = b;
    acc += n;
    if ( acc == 2 * sum / 3 ) b += a;
    if ( acc == sum / 3 ) a++;
  }
  
  return c;
}
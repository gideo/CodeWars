// 5kyu - Square Sums (Simple)

// This is the simple version of the Square Sums kata.

// Square sums
// Complete the function which is given an integer number N (in range [2..43]), and returns an array of integers 1..N arranged in a way, so that sum of each 2 consecutive numbers is a square.

// Solution is valid if the following two criterias are met:

// Each number in the range 1..N is used once and only once.
// Sum of each 2 consecutive numbers is a perfect square.
// Example
// For N=15 solution could look like this:

// [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]

// Verification
// All numbers are used once and only once. When sorted in ascending order array looks like this:
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

// Sum of each 2 consecutive numbers is a perfect square:
//    16      16      16      16      16      16      16
//    /+\     /+\     /+\     /+\     /+\     /+\     /+\
// [ 9,  7,  2, 14, 11,  5,  4, 12, 13,  3,  6, 10, 15,  1,  8 ]
//        \+/     \+/     \+/     \+/     \+/     \+/     \+/
//         9      25       9      25       9      25       9

// 9 = 3*3; 16 = 4*4; 25 = 5*5
// If there is no solution, return false (or, None in scala). For example if N=5, then numbers 1, 2, 3, 4, 5 cannot be arranged into square sum pairs: 1 + 3 = 4, 4 + 5 = 9, but 2 has no pairs and cannot link [1, 3] and [4, 5]

// Have fun!
// The harder version of this Kata is here.

function DFS(r,set,n) {
  if (set.size === n) return true;
  for (let i = 1; i <= n; i++) {
    if (set.has(i)) continue;
    if (r.length && Math.sqrt(r[0] + i) % 1 !== 0) continue;
    set.add(i); r.unshift(i);
    if (DFS(r,set,n)) return true;
    r.shift(); set.delete(i);
  }
  return false;
}

let square_sums_row = (n,r=[]) => DFS(r,new Set(),n) ? r : false;
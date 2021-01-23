// 6kyu - Divisor Harmony 

// Consider the following:

// The divisors of 6 are: 1, 2, 3 & 6 and their sum is 12. Now, 12/6 = 2.
// The divisors of 28 are 1, 2, 4, 7, 14 & 28 and their sum is 56. Now, 56/28 = 2.
// The divisors of 496 are 1, 2, 4, 8, 16, 31, 62, 124, 248, 496 and their sum is 992. Now, 992/496 = 2.
// We shall say that (6,28,496) is a grouping with a ratio of 2.

// Similarly, consider the grouping (30,140):

// The divisors of 30 are: 1, 2, 3, 5, 6, 10, 15 & 30 and their sum is 72. Now, 72/30 = 12/5 = 2.4.
// The divisors of 140 are 1, 2, 4, 5, 7, 10, 14, 20, 28, 35, 70, 140 and their sum is 336. Now, 336/140 = 12/5 = 2.4.
// We shall say that (30,140) is a grouping with a ratio of 12/5.

// (6,28) and (30,140) are the only pairs in which every member of a pair is 0 <= n < 200. The sum of the lowest members of each pair is 6 + 30 = 36.

// Given a range(a,b):

// Find all the pairs in that range where each member of the pairs within the range.
// Return the sum of the lowest member of each pair.
// Examples:
// solve(1,200) = 36, the sum of [6,30] as explained above
// solve(1,250) = 168, the sum of [6, 12, 30, 40, 80]
// solve(1,500) = 498, the sum of [6, 12, 30, 40, 66, 78, 80, 84, 102]
// For solve(1,500), do not include all (6,28) & (6,496) & (28,496). Count the group once by including 6 only.

// If there are no pairs, return nil in Ruby, 0 in other languages. Upper limit is 2000.

// Good luck!

// if you like this Kata, please try:

function solve(a,b){
  let map2 = new Map(), map = new Map();
  for(let i = a; i < b; i++) {
    let sum = [];
    for(let j = 1; j <= i; j++)
       if(i % j == 0) sum.push(j)
    sum = sum.reduce((sum, el) => sum + el, 0) / i;
    map.has(sum) ?  map2.set(map.get(sum), sum) : map.set(sum, i);
  }
  return Array.from(map2).reduce((sum, el) => sum + el[0],0)
};
// 7kyu - Simple Array Product

// In this Kata, you will be given 2 or more arrays of integers, both positive and negative. Your task is to find the maximum product that can be formed by taking one element from each array.

// For example:
// solve([[1, 2],[3, 4]]) = 8, given by 2 * 4
// solve([[10,-15],[-1,-3]]) = 45, given by (-15) * (-3)
// More examples in test cases. Good luck!

// Don't forget to rate and rank!

function solve(arr){
   let f = (a1, a2) => a1.reduce((a,x) => a.concat(a2.map(e => e*x)), []),
       a = arr.slice(1).reduce((a,x) => f(a, x), arr[0]);
   return Math.max(...a);
}
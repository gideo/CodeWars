// 6kyu - Simple Sum of Pairs

// Given an integer n, find two integers a and b such that:

// A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.
// You will return the digitSum(a) + digitsum(b).

// For example:
// solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
// n will not exceed 10e10.

// More examples in test cases.

// Good luck!

function solve(n){
  let res = 0;
  let a = Number("9".repeat(n.toString().length - 1)).toString(), b = (n - a).toString();
  for (i = 0; i < a.length; i++)
    res += Number(a[i])
  for (i = 0; i < b.length; i++)
    res += Number(b[i])
  return res;
}
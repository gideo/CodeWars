// 8kyu - Count Odd Numbers below N

// Given a number n, return the number of odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// Expect large Inputs!

function oddCount(n){
  return Math.floor(n/2);
}
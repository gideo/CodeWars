// 6kyu - Mysterious Pattern

// When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

// Description:
// In this Kata, we have to try to create a mysterious pattern.

// Given a positive integer m, you can generate a Fibonacci sequence with a length of m:

// 1 1 2 3 5 8 13 21 34 ...
// Given a positive integer n, you need to execute % operation on each element of the Fibonacci sequence:

//  m = 9, n = 3
//  Fibonacci sequence: 1 1 2 3 5 8 13 21 34
//                  ---> 1%3 1%3 2%3 3%3 5%3 8%3 13%3 21%3 34%3
//                  ---> 1   1   2   0   2   2   1    0    1
// Finally, make n rows string to show the pattern:

// 112022101
// |||||||||
//    o   o
// oo    o o
//   o oo
// Please Note: 1.Each row is separated by "\n"; 2.You should trim each row; 3.If there are some empty rows at the start or end of string, you should trim them too.

// Examples:
// mysterious_pattern(5,5) should return:

//     o
// oo
//   o
//    o

// mysterious_pattern(12,4) should return:

//      o     o
// oo  o oo  o
//   o     o
//    o     o

// mysterious_pattern(1,1) should return "o"

let mysteriousPattern = (m,n) => new Array(n).fill(fib(m)).map((a,i) => a.map(v => v % n === i ? "o" : " ").join("").replace(/\s+$/,"")).join("\n").replace(/^\n+|\n+$/g,"");

function fib(n) {
  var arr = [];
  while(arr.length < n)
    arr.push(arr[arr.length -1] + arr[arr.length - 2] || 1);
  return arr;
}
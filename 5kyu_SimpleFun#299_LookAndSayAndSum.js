// 5kyu - Simple Fun #299: Look and Say and Sum

// Task

// Get the digits sum of nth number from the Look-and-Say sequence(1-based).
// 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

// Input/Output
// [input] integer n

// nth number in the sequence to get where 1 <= n <= 55 and n=1 is "1".
// [output] an integer
// The sum of digits in nth number from the Look-and-Say sequence.

// Example
// For n = 2, the output shoule be 2.
// "11" --> 1 + 1 --> 2
// For n = 3, the output shoule be 3.
// "21" --> 2 + 1 --> 3
// For n = 4, the output shoule be 5.
// "1211" --> 1 + 2 + 1 + 1 --> 5

function lookAndSayAndSum(n){
  return [1,2,3,5,8,10,13,16,23,32,44,56,76,102,132,174,227,296,383,505,679,892,1151,1516,1988,2602,3400,
          4410,5759,7519,9809,12810,16710,21758,28356,36955,48189,62805,81803,106647,139088,181301,236453,
          308150,401689,523719,682571,889807,1159977,1511915,1970964,2569494,3349648,4366359,5691884][n-1];
}
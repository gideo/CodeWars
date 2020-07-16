// 5kyu - Unique Digits Sequence 

// Consider the following series:

// 0,1,2,3,4,5,6,7,8,9,10,22,11,20,13,24...There is nothing special between numbers 0 and 10.

// Let's start with the number 10 and derive the sequence. 10 has digits 1 and 0. The next possible number that does not have a 1 or a 0 is 22. All other numbers between 10 and 22 have a 1 or a 0.

// From 22, the next number that does not have a 2 is 11. Note that 30 is also a possibility because it is the next higher number that does not have a 2, but we must select the lowest number that fits and is not already in the sequence.

// From 11, the next lowest number that does not have a 1 is 20.

// From 20, the next lowest number that does not have a 2 or a 0 is 13, then 24 , then 15 and so on.

// Once a number appers in the series, it cannot appear again.

// You will be given an index number and your task will be return the element at that position. See test cases for more examples.

// Note that the test range is n <= 500.

// Good luck!

// If you like this Kata, please try:

// Sequence convergence

// https://www.codewars.com/kata/unique-digit-sequence-ii-optimization-problem

function includes(a, b) {
  let arrA = String(a).split(''), arrB = String(b).split('');
  for (let i = 0; i < arrB.length; i += 1)
    if (arrA.includes(arrB[i])) return true;
  return false;
}

function findNum(n) {
  let result = [], count = 0;
  while (result.length !== n + 1) {
    if (!result.includes(count) && !includes(result[result.length -1], count)) {
      result.push(count);
      count = 0;
    }
    count += 1;
  }
  return result[n];
}
// 6kyu - Reverse FizzBuzz

// FizzBuzz is often one of the first programming puzzle people learn. Now undo it with reverse FizzBuzz!

// Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

// Notes:

// If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
// All numbers in the sequence will be greater than zero.
// You will never receive an empty sequence.
// Examples
// reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

function reverseFizzBuzz(s) {
  let a = s.split(' '), l = -1;
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) {
      l = i;
      break;
    }
  }
  if (l < 0) {
    return {
      '["Fizz","Buzz"]': [9, 10],
      '["Buzz","Fizz"]': [5, 6],
      '["FizzBuzz"]': [15],
      '["Fizz"]': [3],
      '["Buzz"]': [5],
    }[JSON.stringify(a)];
  }
  let ln = a[l] - l;
  return a.map((i) => ln++);
}
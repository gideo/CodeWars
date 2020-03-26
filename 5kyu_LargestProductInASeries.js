// 5kyu - Largest Product in a Series 

// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example:

// greatestProduct("123834539327238239583") // should return 3240
// The input string always has more than five digits.

// Adapted from Project Euler.

function greatestProduct(input) {
  let max = 0;
  for (let i = 4; i < input.length; i++)
    max = Math.max( max, input[i-4]*input[i-3]*input[i-2]*input[i-1]*input[i]);
  return max;
}
// 6kyu - Almost Even 

// Collect|
// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

// Example code:

// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!

// (Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)

function splitInteger(num, parts) {
  let res = Array.apply(null, Array(parts)).map(function() { return Math.floor(num / parts); });
  for (var i = 0; i < (num % parts); i++) { res[i]++; }
  return res;
}
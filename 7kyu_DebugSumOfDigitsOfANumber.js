// 7kyu - Debug Sum of Digits of a Number

// Debug   function getSumOfDigits that takes positive integer to calculate sum of 
// it's digits. Assume that argument is an integer.

// Example

// getSumOfDigits(123) // -> 6

function getSumOfDigits(integer) {
  var sum = 0;
  var digits =  Math.floor(integer).toString();
  for(var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}
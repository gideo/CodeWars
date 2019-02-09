// 7kyu - Power of Two

// Complete the function that determines if a given number is a power of two.

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// https://en.wikipedia.org/wiki/Power_of_two

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false

function isPowerOfTwo(n) {
  return !(n & (n - 1));
}
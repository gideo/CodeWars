// 6kyu - Infinite Length Binary Code

// Background
// Your friend has come up with a way to represent any number using binary, but the number of bits can be infinite to represent even the smallest of numbers! He thinks it will be hard to break since just one number can be represented in so many different (and long) ways:

// '000000000000000000000000' == 0

// '111111111111' == 0

// '0101101001100110' == 0

// He isn't a horrible friend so he's given you lots of examples... see if you can crack his code!

// Instructions
// Your task is to write a function that can decode binary, provided as a string, into the number it represents.

// You can safely assume that the given string will only contain ones and zeroes, although it may be empty (in which case the expected number is 0).

// Some representations can be very long so make sure your solution is reasonably efficient.

// Good Luck!

function decodeBits(bits) {
  let res = 0, pos = false;
  for (let i= 0 ; i < bits.length; i++) {
    pos ? res += +bits[i]: res -= +bits[i];
    pos= !pos;
  }
  return res;
}
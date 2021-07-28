// 7kyu - Simple Fun #168: RSA Super Key Generator

// Task
// We need to create a RSA Super Key Generator(SKG).

// For simplicity, SKG(x) = true means that x is an RSA-SKG; otherwise, SKG(x) = false.

// SKG(x) = true if and only if:

// It's composed of exactly n digits;
// There are numbers t and f, such as:
// three is the number of 3s;
// five is the number of 5s;
// three is a multiple of 5;
// five is a multiple of 3;
// n = three + five.
// Given number n, your task is to find the largest x, such as SKG(x) = true. If there is no such number, return "-1".

// Example
// For n = 3, the result should be "555". Because:

// five = 3  --- number of fives is 3, which is a multiple of 3;
// three = 0 --- number of threes is 0, which is a multiple of 5;
// "555" is the largest number that meets these conditions.
// Input/Output
// [input] integer n
// A positive integer.

// [output] a string
// The largest RSA-SKG number with n digits if it exists, "-1"otherwise.

function superKeyGenerator(n) {
  let i = 0;  
  while(n % 3){
    i++;
    n -= 5;
    if(n < 0) return "-1";
  }
  return `${"5".repeat(n)}${"3".repeat(5 * i)}`;
}
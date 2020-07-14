// 5kyu - Simple Fun #339: Maximum Product 2 

// Task
// Given an positive integer n(5 <= n <= 100). Your task is to divide n into some different integers, maximize the product of these integers.

// Example
// For n = 5, the output should be 6.

// 5 can divide into 2 and 3, 2 x 3 = 6

// For n = 8, the output should be 15.

// 8 can divide into 3 and 5, 3 x 5 = 15

// For n = 10, the output should be 30.

// 10 can divide into 2, 3 and 5, 2 x 3 x 5 = 30

// For n = 15, the output should be 144.

// 15 can divide into 2, 3, 4 and 6, 2 x 3 x 4 x 6 = 144

function maximumProduct(n) {
  function fn(m, i, a) {
    if (m === 0) return a;
    if (m < 0 || i > m) return 0;
    return Math.max(fn(m-i, i+1, a*i), fn(m, i+1, a));
  }
  return fn(n, 2, 1);
}
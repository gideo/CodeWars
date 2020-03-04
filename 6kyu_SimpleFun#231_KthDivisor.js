// 6kyu - Simple Fun #231: Kth Divisor

// Task
// Given integers n and k, find the kth divisor (1-based) of n or determine if n has less than k divisors(return -1).

// Input/Output
// [input] integer n

// 5 ≤ n ≤ 10^8.

// [input] integer k

// 1 ≤ k ≤ 20.

// [output] an integer

// The kth divisor of n or -1 if n has less than k divisors.

// Example
// For n = 63 and k = 4, the output should be 9.

// Divisors of number 63 are the following: 1, 3, 7, 9, 21, 63.

// For n = 5 and k = 3, the output should be -1.

// Number 5 has only 2 divisors.

function kthDivisor(n, k) {
  for (let i = 1, j = 0; i <= n; i++)
    if (n % i == 0 && ++j == k)
      return i;
  return -1;
}
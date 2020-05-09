// 7kyu - ATM 

// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

// Good Luck!!!

function solve(n) {
  if (n % 10) return -1;
  return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
    let ans = n / v | 0;
    n %= v;
    return s + ans;
  }, 0)
}
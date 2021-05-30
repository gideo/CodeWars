// 6kyu - Ryomen Sukuna 

// Ryomen Sukuna has entered your body, and he will only leave if you can solve this problem.

// Given an integer n, how many integers between 1 and n (inclusive) are unrepresentable as aba^ba 
// b
//  , where aaa and bbb are integers not less than 2?

// Example:

// if n equals 10 then output must be 7,
// as 4 is representable as 22, 8 as 23 and 9 as 32.
// So the numbers left are 1, 2, 3, 5, 6, 7 and 10.

// Note:

// Optimize your solution for n as large as 1010.

function sukuna(n) {
  let a = 2, b = 2, arr = new Set();
  while (a ** b <= n) {
    arr.add(a ** b);
    b++;
    if (a ** b > n) {
      b = 2;
      a++;
    }
  }
  return n - arr.size;
}
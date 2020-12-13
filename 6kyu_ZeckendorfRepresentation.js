// 6kyu - Zeckendorf Representation 

// The Fibonacci numbers are F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n >= 2. The next five values are

// F(2) = 1
// F(3) = 2
// F(4) = 3
// F(5) = 5
// F(6) = 8
// Every positive integer can be written as a sum of Fibonacci numbers. For example, 10 = 8 + 2 = 5 + 3 + 2 = 3 + 3 + 2 + 2. Apparently, this representation is not unique. It becomes unique, if we rule out consecutive Fibonacci numbers. (This is Zeckendorf's theorem, first proven by Lekkerkerker in 1952.) In the example above, this excludes the last two representations (containing the consecutive Fibonacci numbers F(4) = 3 and F(3) = 2) and we are left with the Zeckendorf representation 10 = 8 + 2.

// Write a function that returns the Zeckendorf representation of a given integer n as a list of Fibonacci numbers in decreasing order. (Return the empty list for n = 0 and None for negative n.)

// Hint: Be greedy!

// Footnote: The Zeckendorf representation is closely connected to the Fibonacci coding, see Zeckendorf's theorem.

function zeckendorf(n) {
  let fb = k => {
    let a = b = 1;
    for (let i = 3; a + b <= k; i++) {
      const c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  if (n < 0) return null;
  let res = [];
  if (n === 0) return res;
 
  let tmp = n, diff = tmp - fb(tmp);
  while (diff >= 0) {
    res.push(fb(tmp));
    tmp = diff; 
    diff = tmp - fb(tmp);
  }
  
  return res;
}
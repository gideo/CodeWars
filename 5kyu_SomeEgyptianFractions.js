// 5kyu - Some Egyptian Fractions

// Given a rational number n

// n >= 0, with denominator strictly positive

// as a string (example: "2/3" in Ruby, Python, Clojure, JS, CS, Go) or as two strings (example: "2" "3" in Haskell, Java, CSharp, C++, Swift)
// or as a rational or decimal number (example: 3/4, 0.67 in R)
// decompose this number as a sum of rationals with numerators equal to one and without repetitions (2/3 = 1/2 + 1/6 is correct but not 2/3 = 1/3 + 1/3, 1/3 is repeated).

// The algorithm must be "greedy", so at each stage the new rational obtained in the decomposition must have a denominator as small as possible. In this manner the sum of a few fractions in the decomposition gives a rather good approximation of the rational to decompose.

// 2/3 = 1/3 + 1/3 doesn't fit because of the repetition but also because the first 1/3 has a denominator bigger than the one in 1/2 in the decomposition 2/3 = 1/2 + 1/6.

// Example:
// (You can see other examples in "Sample Tests:")

// decompose("21/23") or "21" "23" or 21/23 should return 

// ["1/2", "1/3", "1/13", "1/359", "1/644046"] in Ruby, Python, Clojure, JS, CS, Haskell, Go

// "[1/2, 1/3, 1/13, 1/359, 1/644046]" in Java, CSharp, C++

// "1/2,1/3,1/13,1/359,1/644046" in C, Swift, R
// Notes
// 1) The decomposition of 21/23 as

// 21/23 = 1/2 + 1/3 + 1/13 + 1/598 + 1/897
// is exact but don't fulfill our requirement because 598 is bigger than 359. Same for

// 21/23 = 1/2 + 1/3 + 1/23 + 1/46 + 1/69 (23 is bigger than 13)
// or 
// 21/23 = 1/2 + 1/3 + 1/15 + 1/110 + 1/253 (15 is bigger than 13).
// 2) The rational given to decompose could be greater than one or equal to one, in which case the first "fraction" will be an integer (with an implicit denominator of 1).

// 3) If the numerator parses to zero the function "decompose" returns [] (or "".

// 4) The number could also be a decimal which can be expressed as a rational.

// examples:

// 0.6 in Ruby, Python, Clojure,JS, CS, Julia, Go

// "66" "100" in Haskell, Java, CSharp, C++, C, Swift, Scala, Kotlin

// 0.67 in R.

// Ref: http://en.wikipedia.org/wiki/Egyptian_fraction

function decompose(n) {
  let [a, b] = isNaN(n) ? n.split('/').map(Number) : [Number(n), 1], res = [];
  while(a%1) 
    [a, b] = [a*10, b*10];
    
  if ( a > b) {
    res.push(String(a/b>>0));
    a %= b;
  }
  
  while( a > 0){
    let dv = Math.ceil(b/a);
    res.push('1/'+dv);
    [a, b] = [a*dv-b, b*dv];
  }
  return res;
}
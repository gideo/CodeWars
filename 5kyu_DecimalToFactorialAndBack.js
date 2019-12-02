// 5kyu - Decimal to Factorial and Back

// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!.
// The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!.

// More generally, the nth-to-last digit is always 0, 1, 2, ..., or n and is in base n!.
// Example :

// decimal number 463 is coded as "341010":

// 463 (base 10) = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

// If we are limited to digits 0...9 the biggest number we can code is 10! - 1.

// So we extend 0..9 with letters A to Z. With these 36 digits we can code up to

// 36! − 1 = 37199332678990121746799944815083519999999910 (base 10)

// We will code two functions. The first one will code a decimal number and return a string with the factorial representation : dec2FactString(nb)

// The second one will decode a string with a factorial representation and produce the decimal representation : factString2Dec(str).

// Given numbers will be positive.
// Note

// You have tests with Big Integers in Clojure, Julia, Python, Ruby, Haskell, Ocaml, Racket but not with Java and others where the number "nb" in "dec2FactString(nb)" is at most a long.

// Ref: http://en.wikipedia.org/wiki/Factorial_number_system

function dec2FactString(n){
  const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let s = '0', i = 2;
  while (n){s = d[n%i] + s; n = Math.floor(n / i); i++}
  return s;
}
function factString2Dec(s){
  const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const l = s.length;
  return s.split('').reduce((a,e,i) => Number(a) * (l - i) + d.indexOf(e), 0);
}
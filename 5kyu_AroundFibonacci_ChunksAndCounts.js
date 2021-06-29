// 5kyu - Around Fibonacci: Chunks and Counts

// Another Fibonacci... yes but with other kinds of result. The function is named aroundFib or around_fib, depending of the language. Its parameter is n (positive integer).

// First you have to calculate f the value of fibonacci(n) with fibonacci(0) --> 0 and fibonacci(1) --> 1 (see: https://en.wikipedia.org/wiki/Fibonacci_number)

// Find the count of each digit ch in f (ch: digit from 0 to 9), call this value cnt and find the maximum value of cnt; call this maximum value maxcnt. If there are ties, the digit ch to consider is the first one - in natural digit order - giving maxcnt.
// Cut the value f into chunks of length at most 25. The last chunk may be 25 long or less.
// Example: for `n=100` you have only one chunk `354224848179261915075`
// Example: for `n=180` f is `18547707689471986212190138521399707760` and you have two chunks 
// `1854770768947198621219013` and `8521399707760`. First length here is 25 and second one is 13.
// At last return a string in the following format: "Last chunk ...; Max is ... for digit ..."
// where Max is maxcnt and digit the first ch (in 0..9) leading to maxcnt.

// Example: for `n=100` -> "Last chunk 354224848179261915075; Max is 3 for digit 1" 
// Example: for `n=180` -> "Last chunk 8521399707760; Max is 7 for digit 7"
// Example: for `n=18000` -> "Last chunk 140258776000; Max is 409 for digit 1"
// Beware:
// fib(18000) has 3762 digits. Values of n are between 500 and 25000.

// Note
// Translators are welcome for all languages, except for Ruby since the Bash tests needing Ruby a Ruby reference solution is already there though maybe not yet published.

const BN = require('bignumber.js');

function fib(n) {
  if (!n) return [new BN(0),new BN(1)]
  var [a, b] = fib(n >> 1), c = a.mul(b.add(b).minus(a)), d = a.mul(a).add(b.mul(b));
  return n % 2 ? [d, c.add(d)] : [c, d]
}

function aroundFib(n) {
  let r = fib(n)[0].toFixed(0), obj =  {}, c = '', i = r.length, max = -1, index = -1;
  while (i--) {
      c = r[i];
      obj[c] = (obj[c] || 0) + 1;
  }
  
  Object.keys(obj).forEach(function(key) {
      if (obj[key] > max) {
          max = obj[key];
          index = key;
      }
  })
  
  return `Last chunk ${r.slice(r.length - (r.length % 25 || 25))}; Max is ${max} for digit ${index}`;
}
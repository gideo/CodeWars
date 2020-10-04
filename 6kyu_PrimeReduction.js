// 6kyu - Prime Reduction 

// Consider the prime number 23. If we sum the square of its digits we get: 2^2 + 3^2 = 13, then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1.

// Similarly, if we start with prime number 7, the sequence is: 7->49->97->130->10->1.

// Given a range, how many primes within that range will eventually end up being 1?

// The upperbound for the range is 50,000. A range of (2,25) means that: 2 <= n < 25.

// Good luck!

// If you like this Kata, please try:

String.prototype.reduce = Array.prototype.reduce;
function isPrime(n) {
  if ( n<2 ) return false;
  if ( n%2===0 ) return n===2;
  if ( n%3===0 ) return n===3;
  for ( let i=5; i*i<=n; i+=4 ) {
    if ( n%i===0 ) return false;
    i+=2;
    if ( n%i===0 ) return false;
  }
  return true;
}

function sequenceEndsAtOne(n) {
  let t=[n];
  while ( t.indexOf(n)===t.length-1 && n!==1 )
    t.push(n=Number(String(n).reduce( (acc,v) => acc+v*v, 0 )));
  return n===1;
}

function solve(a, b) {
  let r=0;
  for ( ; a<b; a++ )
    if ( isPrime(a) && sequenceEndsAtOne(a) )
      r++;
  return r;
}
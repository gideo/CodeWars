// 6kyu - Simple Fun #338: The Sum of Prime Distance 

// Task
// We define the Prime Distance between two even numbers as: The number of primes between two even numbers. ie. The Prime Distance between 16 and 20 is 2, because there are two primes between 16 and 20 --> (17,19).

// Given an integer array arr. All elements in the array are unique even numbers and they are arranged in ascending order. Your task is to calculate the sum of the Prime Distance of each pair of elements in the array.

// Example
// For arr = [4,6,12], the output should be 6.

// prime distance of (4,6) --> 1
// prime distance of (6,12) --> 2
// prime distance of (4,12) --> 3

// 1 + 2 + 3 = 6
// For arr = [4,6,12,14,16,20], the output should be 40.

// pd(4,6) --> 1
// pd(6,12) --> 2
// pd(12,14) --> 1
// pd(14,16) --> 0
// pd(16,20) --> 2

// pd(4,12) --> 3
// pd(6,14) --> 3
// pd(12,16) --> 1
// pd(14,20) --> 2

// pd(4,14) --> 4
// pd(6,16) --> 3
// pd(12,20) --> 3

// pd(4,16) --> 4
// pd(6,20) --> 5

// pd(4,20) --> 6

// 1+2+1+0+2+3+3+1+2+4+3+3+4+5+6=40

const primes = function sieve(n) {
  const p = Array.from({length:n},(_,i)=>i); p[1]=0;
  for ( var i=2; i<n; i++ )
    if ( p[i] )
      for ( var j=i*i; j<n; j+=i )
        p[j] = 0;
  return p.filter(Boolean);
} ( 25000 ) ;

function sumOfPrimeDistance(a) {
  const distances = [0];
  for ( let i=0, j=primes.findIndex( v => v>a[i] ); i<a.length; j++ ) {
    while ( primes[j]>a[i] ) i++, distances.push(0);
    distances[i]++;
  }
  
  let result = 0;
  for ( let sum=distances.reduce((v,w)=>v+w), i=0; distances.length-2-i-i>0 ; i++ ) {
    sum -= distances[i] + distances[distances.length-1-i];
    result += (distances.length-2-i-i) * sum;
  }
  return result;
}
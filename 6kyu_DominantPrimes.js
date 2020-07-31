// 6kyu - Dominant Primes 

// The prime number sequence starts with: 2,3,5,7,11. Notice that 2 is in position one.

// 3 occupies position two, which is a prime-numbered position. Similarly, 5 and 11 also occupy prime-numbered positions. We shall call primes such as 3,5,11 dominant primes because they occupy prime-numbered positions in the prime number sequence.

// As you can see, for the prime range range(0,10), there are only two dominant primes (3 and 5), which occupy prime-numbered positions 2 and 3 in the prime number sequence, and the sum of these primes is: 3 + 5 = 8.

// Given a range (a,b), what is the sum of dominant primes within that range? Note that a <= range <= b and b will not exceed 500000.

// Good luck!

// If you like this Kata, you will enjoy:

function solve(a, b) {
  let isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num % i === 0) return false;
    } return num > 1;
  }
  let sum = 0, primeCount = 0;
  for(let i = 0; i < b; i++) {
    if(isPrime(i) === true) {
      primeCount++;
      if(i >= a && isPrime(primeCount) === true)
        sum += i;
    }
  }
  return sum;
}
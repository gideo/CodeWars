// 7kyu - Odd Not Prime

// For "x", determine how many positive integers less than or equal to "x" are 
// odd but not prime. Assume "x" is an integer between 1 and 10000.

// Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, 
// so the answer is 1

// Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, 
// so the answer is 2

function isPrime(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0) return false;
    return true;
}

function oddNotPrime(n){
  let a = Array.from(Array(n+1).keys());
  return a.reduce((acc, cur) => acc + ((cur%2==1 && !isPrime(cur)) ? 1 : 0));
}
// 6kyu - Simple Division

// n this Kata, you will be given two numbers, a and b, and your task is to 
// determine if the first number a is divisible by all the prime factors of the 
// second number b. For example: solve(15,12) = False because 15 is not divisible
// by all the prime factors of 12 (which include2).

// See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Sub-array division

// Divisor harmony

function isPrime(n) {
    if(n === 2) { return true;}
    if(n <= 1 || n % 2 === 0) { return false;}
    for(let i = 3; i <= ~~Math.sqrt(n); i+=2)
        if(n % i === 0) return false;
    return true;
}

function solve(a, b){
  for (let i = 1; i <= b; i++)
    if ((b % i === 0) && (a % i != 0) && isPrime(i))
      return false;
  return true;
};
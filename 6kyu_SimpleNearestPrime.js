// 6kyu - Simple Nearest Prime 

// In this Kata, you will be given a number and your task will be to return the nearest prime number.

// solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
// solve(125) = 127
// We'll be testing for numbers up to 1E10. 500 tests.

// More examples in test cases.

// Good luck!

// If you like Prime Katas, you will enjoy this Kata: Simple Prime Streaming

function solve(n) {
    if(isPrime(n)) return n;
    for (let plus = n + 1, minus = n - 1; ; plus++, minus--) {
        if (isPrime(minus))
            return minus;
        if (isPrime(plus))
            return plus;
    }
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;
}
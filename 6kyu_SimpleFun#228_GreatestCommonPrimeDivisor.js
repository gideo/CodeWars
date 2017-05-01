// 6kyu - Simple Fun # 228: Greatest Common Prime Divisor

// Task

// Define GCPD (Greatest Common Prime Divisor) as the largest prime number that divides 
// both given positive integers. Your task is to find GCPD of the given integers a and b 
// or -1 if it doesn't exist.

// Input/Output

// [input] integer a

// 2 ≤ a ≤ 1000

// [input] integer b

// 2 ≤ b ≤ 1000

// [output] an integer

// GCPD of a and b or -1 if it doesn't exist.

// Example

// For a = 12 and b = 18, the output should be 3
// For a = 12 and b = 13, the output should be -1

function isPrime(n) {
    if(n === 2) { return true; }
    if(n % 2 === 0 || n < 2) { return false; }
    for(let i = 3; i <= Math.sqrt(n); i+=2){
        if(n % i === 0){ return false;}
    }
    return true;
}

let gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

let greatestCommonPrimeDivisor = function(a,b) {
    let min = gcd(a, b);
    while(min) {
        if(isPrime(min) && a % (min) === 0 && b % (min) === 0)
            return min;
        min--
    }
    return -1
}
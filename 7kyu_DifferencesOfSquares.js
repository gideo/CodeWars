// 7kyu - Differences of Squares

// Find the difference between the sum of the squares of the first n 
// natural numbers (1 <= n <= 100) and the square of their sum. 
// For example, when n = 10:

// The square of the sum of the first ten natural numbers is:

// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// The sum of the squares of first ten natural numbers is :

// 1**2 + 2**2 + ... + 10**2 = 385

// Hence the difference between square of the sum of the first ten natural 
// numbers and the sum of the squares of those numbes is 3025 - 385 = 2640.

// Example

// differenceOfSquares(10) // => 2640

function differenceOfSquares(x){
    let arr = Array.from(new Array(x),(_,idx)=>idx+1);
    return Math.pow(arr.reduce((a,b) => a + b), 2) - arr.reduce((a,b) => a + Math.pow(b, 2));
}
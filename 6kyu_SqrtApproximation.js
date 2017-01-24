// 6 kyu - Sqrt Approximation

// We want to approximate the sqrt function. Usually this functions takes a 
// floating point number and returns another floating point number, but in this 
// kata we're going to work with integral numbers instead.

// Your task is to write a function that takes an integer n and returns either

// an integer k if n is a square number, such that k * k == n or
// a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).
// Examples

// Test.assertEqual  (sqrtApproximation(4), 2);
// Test.assertSimilar(sqrtApproximation(5), [2, 3]));
// Note : pow()```` andsqrt()``` functions are disabled.

// Remarks

// In dynamic languages, return either a single value or an array/list. In Haskell, 
// use Either.

let sqrtApproximation = function(n){
    if(n <= 0) { return 0; }
    for(let i = 1; i < n; i++){
        if(i * i === n)
            return i;
        if(i * i > n)
            return [i - 1, i];
    }
}
// 7kyu - Return the first M multiples of N 

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5)
// should return

// [5, 10, 15]

let multiples = (m,n) => Array.from(Array(m), (_v, i) => (i + 1) * n);
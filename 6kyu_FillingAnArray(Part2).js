// 6kyu - Filling an Array (part 2)

// Following on from Part 1, part 2 looks at some more complicated array contents.

// So let's try filling an array with...

// ...square numbers
// The numbers from 1 to n*n

// const squares = n => ???
// squares(5) // [1, 4, 9, 16, 25]
// ...a range of numbers
// A range of numbers starting from start and increasing by step

// const range = (n, start, step) => ???
// range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
// ...random numbers
// A bunch of random integers between min and max

// const random = (n, min, max) => ???
// random(4, 5, 10) // [5, 9, 10, 7]
// ...prime numbers
// All primes starting from 2 (obviously)...

// const primes = n => ???
// primes(6) // [2, 3, 5, 7, 11, 13]
// HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.

const squares = n => Array.from(Array(n), (_,i) => Math.pow(i+1,2))

const range = (n, start, step) => Array.from(Array(n), (_,i) => start + i*step)

const random = (n, min, max) => range(n).map(x => Math.floor(Math.random()*(max-min+1)+min));

const primes   = (n,p=1)  => Array.from({length:n}, _=> p = getPrime(p+1));

const getPrime = (n,i=2)  => i*i <= n ? n%i ? getPrime(n,i+1) : getPrime(n+1) : n;

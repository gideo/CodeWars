// 8kyu - Relatively Prime Numbers

// Two numbers are relatively prime if their greatest common factor is 1.
// In other worst if they cannot be divided by any common numbers other than 1, 
// they are relatively prime.
// 13, 16, 9, 5, an 119 are all relatively prime because there share no common 
// factors except for 1, to easily see this I will show their factorizations,
// 13, 2 x 2 x 2 x 2, 3 x 3, 5, 17 x 7

// Create a function that takes 2 inputs, an number, n and a list, l.
// The function should return a list of all the numbers in l that are relatively 
// prime to n.
// n and all numbers in l will be positive integers greater than or equal to 0.
// Some examples:

// relatively_prime(8, [1,2,3,4,5,6,7])
// >>> [1,3,5,7]
// relatively_prime(15, [72,27,32,61,77,11,40])
// >>> [32, 61, 77, 11, 40]
// relatively_prime(210, [15,100,2222222,6,4,12369,99])
// >>> []

function gcd(a,b) {
  return (b===0) ? a : gcd( b, a%b);
}

function relativelyPrime(n,l) {
  return l.filter(a => gcd(n,a) === 1);
}
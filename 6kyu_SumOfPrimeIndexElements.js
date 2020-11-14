// 6kyu - Sum of Prime-Indexed Elements 

// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

// The first element of the array is at index 0.

// Good luck!

// If you like this Kata, try:

// Dominant primes. It takes this idea a step further.

// Consonant value

function total(arr){
  let result = 0;
  if (!arr.length) return result;
  for (let i = 2; i < arr.length; i++)
    if (isPrime(i))
       result += arr[i] 
  return result;
};

let isPrime = n => {
  for (let i = 2; i < n; i++)
    if (n % i === 0) return false
  return true;
}
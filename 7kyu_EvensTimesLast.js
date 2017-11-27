// 7kyu - Evens times last

// Given an array of integers, return the sum of all the integers 

// that have an even index, multiplied by the integer at the last index.

// If the array is empty, you should return 0.


function evenLast(numbers) {
  let t = 0;
  for(let i = 0; i < numbers.length; i+=2)
    t += numbers[i];
  return !numbers.length ? 0 : t * numbers.pop();
}
// 7 kyu - Sum of all multiples of 3 or 5

// Description:

// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let num = 0;
  for(let i = 3; i <= n; i+=1)
    if(i % 3 === 0 || i % 5 === 0)
      num += i;  
  return num;
}
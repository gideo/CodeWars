// 5kyu - Stable Weight Arrangement

// Here is a simple task. Take an array/tuple of unique positive integers, and two additional positive integers. Here's an example below:

// const arr = [3,5,7,1,6,8,2,4];
// const n = 3; // span length
// const q = 13; // weight threshold
// Try to re-arrange arr so that the sum of any n consecutive values does not exceed q.

// solver(arr,n,q); // one possible solution: [4,7,1,5,6,2,3,8]
// Did you succeed? Great! Now teach a computer to do it.

// Technical Details
// NOTE!!! For JavaScript and Python, part of the solution validation process may vary in time duration; there is a chance your solution may time out in an initial run, but pass in the next. I'm working on optimizing to reduce the time-out rate to < 1/20. Please be patient, thanks.

// All test inputs will be valid

// All test cases will have 0 or more possible solutions

// If a test case has no solution, return an empty array/tuple

// Test constraints:

// 2 <= n <= 6
// 4 <= arr length < 12
// n < arr length
// Every value in arr will be less than q
// 11 fixed tests, 40 random tests
// In JavaScript, module and require are disabled

// For JavaScript, use Node 10+

// For Python, use Python 3.6+

// If you enjoyed this kata, be sure to check out my other katas

function solver(arr, n, q) {
  return r([], arr.slice()) || [];
  function r(pre, left) {
    if (!left[0])
      return pre;
    for (var num of left)
      if (pre.concat(num).slice(-n).reduce((a, b) => a + b) <= q)
        if (ret = r(pre.concat(num), left.filter(a => a != num)))
          return ret;          
  }
}
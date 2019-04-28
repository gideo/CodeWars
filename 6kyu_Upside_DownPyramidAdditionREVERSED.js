// 6kyu - Upside-Down Pyramid Addition...REVERSED!

// Upside-Down Pyramid Addition is the process of taking a list of numbers and consecutively adding them together until you reach one number.

// When given the numbers 2,1,1 the following process occurs:

// _______
// \2|1|1/
//  \3|2/
//   \5/
// This ends in the number 5.

// YOUR TASK
// Given the right side of an Upside-Down Pyramid (Ascending), write a function that will return the original list.

// EXAMPLE
// reverse([5,2,1]) => [2,1,1]
// NOTE: The Upside-Down Pyramid will never be empty and will always consist of positive integers ONLY.

function reverse(r) {
  let arr = new Array(r.length);
  arr[0] = [r[0]];
  for(let i = 1; i < r.length; i++) {
    arr[i] = [r[i]];
    for(let j = 0; j < arr[i-1].length; j++)
      arr[i].push(arr[i-1][j] - arr[i][j])
  }
  return arr[arr.length-1].reverse();
}
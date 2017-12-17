// 7 kyu - Swap the head and the tail

// You need to swap the head and the tail of the specified array:

// the head (the first half) of array moves to the end, the tail (the second half) 
// moves to the start. The middle element (if it exists) leaves on the same position.

// For example:

//     [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
//      \----/   \----/         
//       head     tail 

//     [ -1, 2 ]  => [ 2, -1 ] 
//     [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]

function swapHeadAndTail(arr) {
  let n = arr.length/2;
  return arr.slice(Math.round(n)|0).concat(n == (n|0) ? [] : arr[n|0], arr.slice(0,n));
}
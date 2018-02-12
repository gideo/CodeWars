// 4kyu - Pascal's Triangle

// Wikipedia article on Pascal's Triangle: 
// http://en.wikipedia.org/wiki/Pascal's_triangle

// Write a function that, given a depth (n), returns a single-
// dimensional array representing Pascal's Triangle to the n-th level.

// For example:

// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

function pascalsTriangle(n) {
  let arr = [], idx = 0;
  
  for ( let i = 0; i < n; i++ ) {
    idx = arr.length - i;
    for ( let j = 0; j < i+1; j++ )
      (j === 0 || j === i) ? arr.push(1) : 
      arr.push( arr[ idx+j ] + arr[ idx+j-1 ] );
  }
  
  return arr;
}
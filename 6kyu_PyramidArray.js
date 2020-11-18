// 6kyu - Pyramid Array 

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

function pyramid(n) {
  let res = [];
  for(let i = 0; i < n; i++)
    res.push([...Array(i+1)].fill(1));
  return res;
}
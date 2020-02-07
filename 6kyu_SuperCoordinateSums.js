// 6kyu - Super Coordinate Sums!

// Given an D-dimension array, where each axis is of length N, your goal is to find the sum of every index in the array starting from 0.

// For Example if D=1 and N=10 then the answer would be 45 ([0,1,2,3,4,5,6,7,8,9]) If D=2 and N = 3 the answer is 18 which would be the sum of every number in the following:

// [
// [(0,0), (0,1), (0,2)],
// [(1,0), (1,1), (1,2)],
// [(2,0), (2,1), (2,2)]
// ]
// A naive solution could be to loop over every index in every dimension and add to a global sum. This won't work as the number of dimension is expected to be quite large.

// Hint: A formulaic approach would be best Hint 2: Gauss could solve the one dimensional case in his earliest of years, This is just a generalization.

// Note for JS version: Because the results will exceed the maximum safe integer easily, for such values you're only required to have a precision of at least 1 in 1e-9 to the actual answer.

let superSum = (D,N) => D * Math.pow(N, D - 1) * (N-1) * N/2;
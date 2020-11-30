// 6kyu - Weigh The List #1 

// Task
// You get a list of non-zero integers A, its length is always even and always greater than one. Your task is to find such non-zero integers W that the weighted sum

// A0⋅W0+A1⋅W1+..+An⋅WnA_0 \cdot W_0 + A_1 \cdot W_1 + .. + A_n \cdot W_nA 
// 0
// ​	
//  ⋅W 
// 0
// ​	
//  +A 
// 1
// ​	
//  ⋅W 
// 1
// ​	
//  +..+A 
// n
// ​	
//  ⋅W 
// n
// ​	
 
// is equal to 0.

// Examples
// weights([ 1, 2, 3, 4, 5, 6 ])  =>  [ -10, -1, -1, 1, 1, 1 ] // other solution are possible
// // 1 * -10 + 2 * -1 + 3 * -1 + 4 * 1 + 5 * 1 + 6 * 1 == 0

// weights([-13, 52])  =>  [ 4, 1 ] // other solutions are possible
// // -13 * 4 + 52 * 1 == 0

// weights([-1, 1])  =>  [ 1, 1 ] // other solutions are possible
// // -1 * 1 + 1 * 1 == 0

function weights(a) {
  let arr = [];
  for (i = 0; i < a.length; i++)
    arr.push( i % 2 == 0 ? a[i+1] : -a[i-1])
  return arr;
}
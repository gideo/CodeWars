// 6kyu - Simple Arithmetic Progression 

// In this Kata, you will be given an array of integers and your task is to return the number of arithmetic progressions of size 3 that are possible from that list. In each progression, the differences between the elements must be the same.

// [1, 2, 3, 5, 7, 9] ==> 5
// // [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]
// All array elements will be unique and sorted. More examples in test cases.

// Good luck!

function solve(arr){
  let num = 0, c = arr[arr.length-1] - arr[0];
  for(let i=0; i<arr.length; i++)
    for(let j=1; j<=(c/2); j++)
      if(arr.includes(arr[i]+j) && arr.includes(arr[i]+2*j))
        num ++;
  return num;
}

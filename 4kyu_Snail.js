// 4kyu - Snail

// Description:

// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to 
// the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

let snail = function(arr) {
  let result = [];
  
  while(arr.length > 0) {
    result = result.concat.apply(result, arr.splice(0, 1));
    
    for(let i = 0; i < arr.length; i+=1) {
      result = result.concat(arr[i].splice(arr.length));
    }
    
    let temp = [].concat.apply([], arr.splice(arr.length-1)).reverse();
    result = result.concat.apply(result, temp);
    
    for(let i = arr.length-1; i >= 0; i-=1) {
      result = result.concat(arr[i].splice(0, 1));
    }
  }
  
  return result;
}
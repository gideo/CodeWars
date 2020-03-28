// 6kyu - Difference of 2

// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

// Examples
// [1, 2, 3, 4]      -->  [[1, 3], [2, 4]]
// [4, 1, 2, 3]      -->  [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7]  -->  [[1, 3]]
// [4, 3, 1, 5, 6]   -->  [[1, 3], [3, 5], [4, 6]]

function twosDifference(input){
  return input
   .sort(function(a, b){
     return a - b
   })
   .filter(function(a){
     return input.indexOf(a+2) != -1
   })
   .map(function(a){
     return [a, a+2]
   })
}
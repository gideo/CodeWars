// 6kyu - Sum Two Arrays 

// Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, which takes two arrays consisting of integers, and returns the sum of those two arrays.

// The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

// [3,2,9],[1,2] --> [3,4,1]
// [4,7,3],[1,2,3] --> [5,9,6]
// [1],[5,7,6] --> [5,7,7]
// If both arrays are empty, return an empty array.

// In some cases, there will be an array containing a negative number as the first index in the array. In this case treat the whole number as a negative number. See below:

// [3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962

function addArrays(array1, array2) {
if((!Array.isArray(array1) || !array1.length) && (!Array.isArray(array2) || !array2.length)) return [];
  let arr1 = array1.length > 0 ? parseInt(array1.join('')) : 0,
      arr2 = array2.length > 0 ? parseInt(array2.join('')) : 0;
  let neg = (arr1+arr2) >= 0 ? 0 : 1, result = (arr1 + arr2).toString().split('');
 result = result.map(a => parseInt(a));
 if (neg == 1) {
   result.shift();
   result[0] = -Math.abs(result[0]); 
 } 
  return result ;
}
// 7kyu - Maximum Gap (Array Series #4)

// If you complete Array_Series You know by now how to manipulate 
// array effectively ,

// If not you can take a look to get how things work :

// Minimize_Sum_Of_array

// Maximize_Product_Of_Array

// Well , It's time to expand our series for more :

// We are given an array [] of n integers,

// Find The maximum difference between the successive elements in its sorted form.
// Notes :

// 1- Vector size is at least 3 .
// 2- The Vector's numbers could be a mixture of positives and negatives 

// also zeros .

// 3- Repeatition of numbers in the vector could occur .
// 4- The Maximum Gap is computed Regardless the sign.

// If any of the previous points (Notes) is not clear , pay attention to the 

// Examples clarify everything .
// Input :: Output Examples ::

// 1- maxGap ({13,10,5,2,9}) //return (4)

// Explanation ::

// THe Maximum Gap after sorting the array is (4) , 
// the difference between (9-5 = 4 ) .

// 2- maxGap ({-3,-27,-4,-2}) //return (23)

// Explanation ::

// The Maximum Gap after sorting the array is (23) , The difference 
// between |-4-(-27)| = 23 , Note : Regardless the sign of negativity .

// 3- maxGap ({-7,-42,-809,-14,-12}) //return (767)  

// Explanation ::

// The Maximum Gap after sorting the array is (767) , The difference 
// between |-809-(-42)| = 767 , Note : Regardless the sign of negativity .

// 4- maxGap ({-54,37,0,64,640,0,-15}) //return (576)

// Explanation ::

// The Maximum Gap after sorting the array is (576) , The difference between 
// (64-640) = 576 , Note : Regardless the sign of negativity .
// If you feel Enjoyed this Kata , Then How About (Monkey With) Numbers in 
// this Series ::

// Balanced Number
// STRNOGN - Strong Number
// Disarium Number
// Jumping Number
// Special Number

// Automorphic_Number

function maxGap (numbers){
  let sort = numbers.sort((a,b) => a-b), arr = [];
  for(let i=1; i < sort.length; i++)
    arr.push(numbers[i] - numbers[i-1]);
  return Math.max(...arr);
}
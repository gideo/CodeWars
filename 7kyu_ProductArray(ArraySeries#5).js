// 7kyu - Product Array (Array Series #5)

// If You Complete Array_Series You Know By Now How To Manipulate Array Effectively ,
// If Not You Can Take a Look To Get How Things Work :

// Minimize_Sum_Of_array
// Maximize_Product_Of_Array
// Array_Leaders
// Maximum_Gap

// Well , It's Time To Expand Our Series For More :

// We are Given an array [] of n integers,

// Construct a product array Prod[] (Of same size) Such That prod[i] is equal to 
// The Product of all the elements of Arr[] except Arr[i].
// Notes
// 1- Vector Size is at least 2 .

// 2- The Vector's Numbers Will Only Postives (n > 0) .

// 3- Repeatition of Numbers in the Vector Could Occur .

// If Any Of The Previous Points (Notes) Is Not Clear , Pay Attention To The 
// Examples Clarify Everything .
// Input :: Output Examples ::
// 1- productArray ({12,20})  return {20,12}

// Explanation ::

// The first element in prod [] array (12) is the product of all array's elements 
// except the first element , while The second element (20) is the product of all 
// array's elements except the second element .

// 2- productArray ({1,5,2})  return {10,2,5}

// Explanation ::

// in prod [] Array : 

// The first element (10) is the product of all array's elements except the first 
// element (1), while The second element (2) is the product of all array's elements 
// except the second element (5) , and the Third element (5) is the product of all 
// array's elements except the Third element (2).


// 3- productArray ({10,3,5,6,2}) return {180,600,360,300,900}

// Explanation ::

// in prod [] Array : 

// THe first element (180) is the product of all array's elements except the first 
// element (10) , While The second element (600) is the product of all array's 
// elements except the second element (3) , the Third element (360) is the product 
// of all array's elements except the third element (5) , the Fourth element (300) 
// is the product of all array's elements except the fourth element (6) , and 
// Finally The Fifth element is the product of all array's elements except the 
// Fifth element (2).
// If you feel Enjoyed this Kata , Then How About Monkey With Numbers in this Series ::

function productArray(num) {
  let sum = num.reduce((a, b) => a * b);
  return num.map(x => sum / x);
}
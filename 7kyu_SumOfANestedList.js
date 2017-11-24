// 7kyu - Sum of a Nested List

// Implement a function to calculate the sum of the numerical values in a 

// nested list. For example :

// sumNested([1, [2, [3, [4]]]]) => 10

const sumNested = arr => {
  let temp = 0;
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i]))
      temp += sumNested(arr[i]);
    else
      temp += arr[i];
  }
  return temp;
};
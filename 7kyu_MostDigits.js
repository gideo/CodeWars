// 7 kyu - Most Digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, 
// return the first one in the array.

function findLongest(array){
  let max = 0;
  for(let i = 0; i < array.length; i++) {
    if(String(array[i]).length > String(max).length){
      max = array[i]
    }
  }
  return max;
}
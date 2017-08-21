// 7kyu - esreveR

// Write a function reverse which reverses a list 
// (or in clojure's case, any list-like data structure)

let reverse = function(array) {
  let temp = [];
  for(let i = array.length-1; i >= 0; i--) {
    temp.push(array[i]);
  }
  return temp;
}
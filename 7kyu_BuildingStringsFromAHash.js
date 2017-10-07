// 7kyu - Building Strings From a Hash

// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash 
// (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a 
// comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

function solution(pairs){
  let arr = [];
  for(let x in pairs)
    arr.push(`${x} = ${pairs[x]}`)
  return arr.join(",");
}
// 7kyu - Multiply the Strings in the Array

// You received an array with two strings. Create a function that will return their 

// product as a string. E.g.

// arrMultiply(['9','6']) should return '54'

function arrMultiply(arr){
   return String(arr.reduce((b,c) => +b * +(c)));
}
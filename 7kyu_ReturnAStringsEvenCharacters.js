// 7kyu - Return a string's even characters.

// Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

// For example:

// "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
// "a"             --> "invalid string"

let evenChars = s => {
  if (s.length < 2 || s.length > 100) return `invalid string`;
  return s.split('').filter((v,i) => i%2>0); 
};
// 7kyu - Indexed Capitalization

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// Be sure to also try:

function capitalize(s,arr){
  let cap = s.split("");
  for(var i = 0; i < arr.length; i++)
    if(cap[arr[i]])
      cap[arr[i]] = cap[arr[i]].toUpperCase();
  cap = cap.join("");
  return cap;
};
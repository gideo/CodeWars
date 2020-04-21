// 7kyu - Sort Array by Last Character

// Sort array by last character

// Write a function sortMe or sort_me to sort a given array or list by last character of elements.

// Element can be an integer or a string.

// Example:
// sortMe(['acvd','bcc']) => ['bcc','acvd']
// The last characters of the strings are d and c. As c comes before d, sorting by last character will give ['bcc', 'acvd'].

// If two elements don't differ in the last character, then they should be sorted by the order they come in the array. 

function sortMe(arr) {
  let arr2 = arr.slice(0);
  return arr.sort(function(a,b){ return a.toString().slice(-1) < b.toString().slice(-1) ? -1 : (a.toString().slice(-1) === b.toString().slice(-1) ?  arr2.indexOf(a) - arr2.indexOf(b) : 1)});
}
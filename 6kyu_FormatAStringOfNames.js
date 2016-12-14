// 6 kyu - Format a string of names like 'Bart, Lisa & Maggie'

// Description:

// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for 
// the last two names, which should be separated by an ampersand.
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns ''

let list = function(names) {
  if(names.length <= 1) {
    return names.length ? names[0].name : '';
  }
  let str = '', last = names.pop();
  
  for(let x = 0; x < names.length; x+=1) {
    str += (names[x].name) + ", ";
  }
  
  return str.substring(0, str.length - 2) + ` & ${last.name}`;
}
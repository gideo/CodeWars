// 7kyu - Without the Letter 'E'

// Is it possible to write a book without the letter 'e' ?

// Task

// Given String str, return:

// How much "e" does it contains (case-insensitive) - return number as String.
// If given String doesn't contain any "e", return: There is no "e".
// If given String is empty, return empty String.
// If given String is null, return null

function find_E(str){
  return (str === null) ? null : !str.length ? '' : (str.toLowerCase().indexOf('e') > -1) ? String(str.match(/e/gi).length) : 'There is no "e".';
}
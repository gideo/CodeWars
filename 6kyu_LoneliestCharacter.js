// 6kyu - Loneliest Character 

// Your task is to write a function loneliest(str) which accepts a string like this:

// 'a b  z   p c'
// and should return array of character(s) that have the most spaces to their right and left.

// Examples:

// 'a b  c' => ['b']
// 'a bcs           d k' => ['d']
// '    a b  sc     p     t   k'  => ['p']
// 'a  b  c  de'  => ['b', 'c']
// '     a  b  c de        '  => ['b']
// 'abc' => ['a', 'b', 'c']
// Note:

// String can have leading/trailing spaces, you should not count them;

// Order of characters in array doesn't matter;

// Good luck!

function loneliest(str) {
  str = str.trim();
  let left = 0, num = 0, arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    let right = 0;
    for (let j = 1; str[i + j] === ' '; j++) 
      right++;
    if (left + right > num) {
      num = left + right;
      arr = [str[i]];
    } else if (left + right === num)
      arr.push(str[i]);
    left = right;
  }
  return arr;
}
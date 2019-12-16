// 6kyu - Longest Alphabetical Substring

// Find the longest substring in alphabetical order.

// Eg: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// Good luck :)

function longest(str, max = '') {
  let current = [...str].reduce((acc, ch) => (
    ch >= acc.slice(-1) ? acc + ch : (max = acc.length > max.length ? acc : max, ch)
  ), '');
  return current.length > max.length ? current : max;
}
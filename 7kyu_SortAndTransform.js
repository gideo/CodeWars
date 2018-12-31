// 7kyu - Sort and Transform

// Given an array of numbers, return a string made up of four parts:

// a) a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

// b) the same as above, post sorting the array into ascending order,

// c) the same as above, post sorting the array into descending order,

// d) the same as above, post converting the array into ASCII characters and sorting alphabetically.

// The four parts should form a single string, each part separated by a hyphen: '-'

// example format of solution: 'asdf-tyui-ujng-wedg'

function sortTransform(a) {
  function convert(a) {
    return String.fromCharCode(...a.slice(0, 2).concat(a.slice(-2)));
  }
  let first = convert(a);
  let second = convert(a.sort((x, y) => x - y));
  let third = convert(a.sort((x, y) => y - x));
  return `${first}-${second}-${third}-${second}`;
}
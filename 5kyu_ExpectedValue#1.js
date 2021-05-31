// 5kyu - Expected Value #1

// Expected value #1
// Write a next() function that returns the expected value.

// Hint 1: The expected value can be an object, a function, a string or a number.
// Hint 2: Inspect the variable expected.
// Hint 3: the variable expected changes its value every time you get it.
// Good luck!

let nexts = [], a = null;
while ((a = expected) !== nexts[0]) nexts.push(a)

let index = 0;
function next () {
  index = (index + 1) % nexts.length;
  return nexts[index];
}


// 6kyu - No Order of Operations 

// Imagine if there were no order of operations. Instead, you would do the problem from left to right. For example, the equation a +b *c /da+b∗c/d would become (((a+b)*c)//d)(((a+b)∗c)//d) (Math.floor(((a+b)*c)/d) in JS). Return None/null (depending on your language) if the equation is "".

// Task:
// Given an equation with a random amount of spaces greater than or equal to zero between each number and operation, return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one number: 1 3 = 13. However, if given something % 0 or something / 0, return None/null.

// More about order of operations: here

// Key:
// ^ represents **
// / should always be rounded down because the result will always be an integer
// Operations allowed:
// +, -, * , /, ^, %

// Example:
// no_order(2 + 3 - 4 * 1 ^ 3) returns 1
// because:

//   2 + 3 - 4 * 1 ^ 3
// = 2 + 3 - 4 * 1 ^ 3
// = 5 - 4 * 1 ^ 3
// = 1 * 1 ^ 3
// = 1 ^ 3
// = 1

function noOrder(s) {
  const output = s.replace(/ /g, "");
  if (output.includes("/0") || output.includes("%0")) return null
  const regExp = /-|\/|\+|\*|\^/g, operations = output.match(regExp),
        nums = output.match(/\d+/g).map((num) => Number(num));
  const operation = {
    "+": (v) => (w) => v + w,
    "-": (v) => (w) => v - w,
    "*": (v) => (w) => v * w,
    "/": (v) => (w) => Math.floor(v / w),
    "%": (v) => (w) => v % w,
    "^": (v) => (w) => v ** w,
  };

  return nums.reduce((a, b, i) => {
    const fn = operation[operations[i - 1]];
    return fn(a)(b);
  });
}
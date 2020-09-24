// 6kyu - Fix Array Sequence 

// Assume we take a number x and perform any one of the following operations:

// a) Divide x by 3 (if it is divisible by 3), or
// b) Multiply x by 2
// After each operation, we write down the result. If we start with 9, we can get a sequence such as:

// [9,3,6,12,4,8] -- 9/3=3 -> 3*2=6 -> 6*2=12 -> 12/3=4 -> 4*2=8
// You will be given a jumbled sequence of integers and your task is to reorder them so that they conform to the above sequence. There will always be an answer.

// For the above example:
// solve([12,3,9,4,6,8]) = [9,3,6,12,4,8].
// More examples in the test cases. Good luck!

function solve(arr) {
  if (arr.length < 2)
    return arr;
  let check = (a, b) => (a % 3 === 0 && a / 3 === b) || a * 2 === b, res = arr.splice(0, 1);
  while (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (check(res[res.length - 1], arr[i])) {
        res.push(arr.splice(i, 1)[0]);
        break;
      }
      if (check(arr[i], res[0])) {
        res.splice(0, 0, arr.splice(i, 1)[0]);
        break;
      }
    }
  }
  return res;
}
// 6kyu - Diagonal Strings 

// In this kata, you have a string array has N elements and each element of array has N length(NxN).

// For Example: {"abcd","kata","1234","qwer"}
// You must first sort the array alphabetically. And output consists of letters obtained diagonally (from upper left to lower right).

// For Example:

//   1234                       abcd                           
//   abcd                       kata                           
//   kata                       qwer                           
//   qwer -> 1234 => "1btr"     1234 -> abcd => "aae4"         

//   kata                       qwer
//   qwer                       1234
//   1234                       abcd
//   abcd -> kata => "kw3d"     kata -> qwer => "q2ca"

//   Output : {"aae4","kw3d","1btr","q2ca"} (by input order)
// TASK:
// Write a function that accepts a square(NxN) array and returns diagonal strings as array (as the order of input array).

// NOTES:
// If input array is not square(NxN) (array with 0 length is not accept as square too) returns null.

// You must return error, for the above case in Go language.

function diagonalsOfSquare(arr) {
  let n = arr.length, res = [], a = [...arr].map((e, i) => [e,i]).sort((x, y) => x[0] > y[0]);
  if (n === 0 || arr.some(e => e.length !== n)) return null;
  for (let i = 0; i < n; i++)
    res[a[i][1]] = [...a.slice(i), ...a.slice(0, i)].map((e, i) => e[0][i]).join``;
  return res;
}
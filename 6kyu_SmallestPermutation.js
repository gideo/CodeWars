// 6kyu - Smallest Permutation 

// Given a number, find the permutation with the smallest absolute value (no leading zeros).

// -20 => -20
// -32 => -23
// 0 => 0
// 10 => 10
// 29394 => 23499
// The input will always be an integer.

function minPermutation(n) {
  let res = Math.abs(n).toString().split("").sort();
  if (res[0] === "0" && res[res.length - 1] !== "0") {
    let i = 1;
    while (true) {
      if (res[i] !== "0") {
        res[0] = res[i];
        res[i] = "0";
        break;
      }
      i++;
    }
  }
  res = parseInt(res.join(""));
  return n >= 0 ? res : -res;
}
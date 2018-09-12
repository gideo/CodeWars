// 7kyu - Simple Eviternity Numbers

// An eviternity number is a number in which the count of the 
// digit 8 >= count of digit 5 >= count of digit 3. The first few 
// eviternity numbers are as follows. Note that they comprise of 
// digits 8, 5 and 3 only.

// [8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
// You will be given two integers, a and b, and your task is to return 
// the number of eviternity numbers in the range >= a and < b.

// For example:
// solve(0,1000) = 14, because they are [8, 58, 85, 88, 358, 385, 
// 538, 583, 588, 835, 853, 858, 885, 888]
// The upper bound will not exceed 500,000.

// More examples in test cases. Good luck!

function solve(a,b) {
  let count = 0;
  for (let i = a; i < b; i++) {
    let res = i + '';
    if (!/^[358]+$/.test(res))
      continue;
    res = [...res];
    let n8 = res.filter(x => x === '8').length, n5 = res.filter(x => x === '5').length, n3 = res.length - n5 - n8;
    count += (n8 >= n5 && n5 >= n3);
  }
  return count;
}
// 6kyu - Sum Fibs 

// Create a function that takes an argument n and sums even fibonacci numbers upto n's index in the fibonacci sequence.

// Example:

// sumFibs(5) === 2. (0, 1, 1, 2, 3, 5); 2 is the only number in the sequence and doesn't have another number in the sequence to get added to in the indexed fibbonacci sequence.
// Example:

// sumFibs(9) === 44. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34); 
// 2 + 8 + 34 = 44;

function sumFibs(n) {
  let [a, b, res] = [1, 1, 0];
  while (n--) {
    if (a % 2 == 0) res += a;
    [a, b] = [b, a+b];
  }
  return res;
};
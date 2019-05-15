// 7kyu - Get List Sum Recursively

// Write function sumR which returns the sum of values in a given list. 
// Try no to cheat and provide recursive solution.

function sumR(x) {
  if (x.length === 0)
    return 0;
  return x[0] + sumR(x.slice(1));
}
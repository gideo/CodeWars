// 6kyu - Reducing a Pyramid

// Number pyramid
// Number pyramid is a recursive structure where each next row is constructed by adding adjacent values of the current row. For example:

// Row 1     [1     2     3     4]
// Row 2        [3     5     7]
// Row 3           [8    12]
// Row 4             [20]
// Task
// Given the first row of the number pyramid, find the value stored in its last row.

// Examples
// reducePyramid([1n])          ===  1n
// reducePyramid([3n, 5n])      ===  8n
// reducePyramid([3n, 9n, 4n])  ===  25n
// Performance tests
// Number of tests: 5
// Array size: 10,000

function row(n) {
  const row = [1n];
  for (let k = 0; k < n; k++)
    row.push(row[k] * BigInt(n - k) / BigInt(k + 1));
  return row;
}

function reducePyramid(base) {
  let dotProduct = (l, f) => l
    .map((n, i) => n * f[i])
    .reduce((sum, n) => sum + n, 0n),
      coefficients = row(base.length - 1);
  return dotProduct(base, coefficients);
}
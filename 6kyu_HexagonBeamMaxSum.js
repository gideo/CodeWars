// 6kyu - Hexagon Beam Max Sum 

// In this kata, your task is to find the maximum sum of any straight "beam" on a hexagonal grid, where its cell values are determined by a finite integer sequence seq.

// In this context, a beam is a linear sequence of cells in any of the 3 pairs of opposing sides of a hexagon. We'll refer to the sum of a beam's integer values as the "beam value".
// Refer to the example below for further clarification.

// Input
// Your function will receive two arguments:

// n : the length of each side of the hexagonal grid, where 2 <= n < 100
// seq : a finite sequence of (positive and/or nonpositive) integers with a length >= 1
// The sequence is used to populate the cells of the grid and should be repeated as necessary.
// The sequence type will be dependent on the language (e.g. array for JavaScript, tuple for Python, etc.).
// Output
// Your function should return the largest beam value as an integer.

// Test Example

// In our test example, we have the following arguments:
// n = 4
// seq = [2, 4, 6, 8]

// Below is the hexagonal grid determined by our example arguments;
// the sequence repeats itself from left to right, then top to bottom.

//    2 4 6 8
//   2 4 6 8 2
//  4 6 8 2 4 6
// 8 2 4 6 8 2 4
//  6 8 2 4 6 8
//   2 4 6 8 2
//    4 6 8 2

// The three diagrams below illustrate the "beams" in the hexagonal grid above.
// In the grid on the left, the horizontal beams are highlighted by their likewise colors,
// and the value of each beam is given to its right.
// In the center grid, the beams highlighted go from upper-right to bottom-left (and vice-versa).
// In the grid on the right, the beams highlighted go from upper-left to bottom-right (and vice-versa).

//    2 4 6 8 -> 20           2 4 6 8           2 4 6 8
//   2 4 6 8 2 -> 22         2 4 6 8 2         2 4 6 8 2
//  4 6 8 2 4 6 -> 30       4 6 8 2 4 6       4 6 8 2 4 6
// 8 2 4 6 8 2 4 -> 34     8 2 4 6 8 2 4     8 2 4 6 8 2 4
//  6 8 2 4 6 8 -> 34       6 8 2 4 6 8       6 8 2 4 6 8
//   2 4 6 8 2 -> 22         2 4 6 8 2         2 4 6 8 2
//    4 6 8 2 -> 20           4 6 8 2           4 6 8 2

// The maximum beam value in our example is 34.
// Test Specifications
// All inputs will be valid
// Full Test Suite: 12 fixed tests and 100 random tests
// For JavaScript, module and require are disabled [NOTE: if you would like to suggest a module that you think should be permitted for JS, please leave a note in the Discourse section]
// If you enjoyed this kata, be sure to check out my other katas

function maxHexagonBeam(n, seq){
  let step = 0;
  const next = () => seq[step++ % seq.length], a = Array(6 * n - 3).fill(0), t = 3 * n - 2;
  for (let i = 0; i < 2 * n - 1; i++) {
    const k = Math.max(i - n + 1, 0);
    for (let j = 0; j < i + n - 2 * k; j++) {
      const val = next();
      a[i] += val;
      a[t + k + j - i] += val;
      a[2 * t - k - j] += val;
    }
  }
  return Math.max(...a);
}
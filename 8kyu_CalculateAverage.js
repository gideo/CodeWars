// 8kyu - Calculate Average
// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}
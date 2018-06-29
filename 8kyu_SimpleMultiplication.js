// 8kyu - Simple Multiplication

// This kata is about multiplying a given number by eight if it is 
// an even number and by nine otherwise.

function simpleMultiplication(number) {
  return (number % 2 === 0) ? (number * 8) : (number * 9);
}
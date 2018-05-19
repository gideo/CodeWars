// 7kyu - Predict your age!

// My grandfather always predicted how old people would get, and right before he 
// passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Find the age of when each of your great grandparents died.
// Multiply each number by itself.
// Add the numbers together.
// Take the square root of that number.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

function predictAge(...ages){
  ages = (ages.map(a=> Math.pow(a,2)));
  return ~~(Math.sqrt(ages.reduce((a,b) =>a + b))/2);
}
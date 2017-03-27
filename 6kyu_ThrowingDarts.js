// 6kyu - Throwing Darts

// Description:

// You've just recently been hired to calculate scores for a Dart Board game! 

// Scoring specifications:
// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5

// If all radiuses are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radiuses (can be integers and/or floats), 
// and returns a total score using the above specification.
// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] ) => returns 15 
// scoreThrows( [15, 20, 30] ) => returns 0 
// scoreThrows( [1, 2, 3, 4] ) => returns 140


function scoreThrows(radiuses){
  if(!radiuses.length) { return 0;}
  let bonus = (radiuses.filter(a => a < 5).length === radiuses.length) ? 100 : 0
  return radiuses.map(a => (a > 10) ? 0 : (a >= 5 && a <= 10) ? 5 : 10).reduce((b,c) => b + c) + bonus;
}

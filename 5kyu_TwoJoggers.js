// 5kyu - Two Joggers

// Description:

// Two Joggers

// Bob and Charles are meeting for their weekly jogging tour. They both start at the same 
// spot called "Start" and they each run a different lap, which may (or may not) vary in 
// length. Since they know each other for a long time already, they both run at the exact 
// same speed.

// Task

// Your job is to complete the function nbrOfLaps(x, y) that, given the length of the 
// laps for Bob and Charles, finds the number of laps that each jogger has to complete 
// before they meet each other again, at the same time, at the start.

// The function takes two arguments:

// The length of Bob's lap (larger than 0)
// The length of Charles' lap (larger than 0)
// The function should return an array containing exactly two numbers:

// The first number is the number of laps that Bob has to run
// The second number is the number of laps that Charles has to run
// Examples

// nbrOfLaps(5, 3); // returns [3, 5]
// nbrOfLaps(4, 6); // returns [3, 2]

const getLCM = (x, y) => (x * y) / getGCD(x, y);
      
function getGCD(x, y) {  
  var t;
  while(y) {  
    t = y;
    y = x % y;  
    x = t;  
  }  
  return x;  
}  

var nbrOfLaps = function (x, y) {
  var lcm = getLCM(x, y);
  return [(lcm/x), (lcm/y)];
}
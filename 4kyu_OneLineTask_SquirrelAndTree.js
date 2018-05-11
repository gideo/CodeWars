// 7kyu - One Line Task: Squirrel and Tree
// Since the weather was good, some students decided to go for a walk in the park 
// after the first lectures of the new academic year. There they saw a squirrel, 
// which climbed a tree in a spiral at a constant angle to the ground. They calculated 
// that in one loop the squirrel climbes h meters (vertical height), the height of 
// the tree is equal to H (v in Ruby), and the length of its circumference equals S.

// These calculations were exhausting, so now the students need your help to figure 
// out how many meters the path length of squirrel climbed when it reached the tree 
// top. The result should be rounded to 4 decimal places.

// Code Limit
// Less than 52 characters (JavaScript & Python)

// Less than 48 characters (Ruby)

// Example
// For h = 4, H = 16, S = 3, the output should be 20.

// For h = 8, H = 9, S = 37, the output should be 42.5869.

squirrel=(h,H,S)=>+Math.hypot(H,H*S/h).toFixed(4)
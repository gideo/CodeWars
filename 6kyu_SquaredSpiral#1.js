// 6kyu - Squared Spiral #1

// Squared Spiral #1
// Given the sequence of positive integers (0,1,2,3,4...), find out the coordinates (x,y) of a number on a square spiral, like the drawings bellow.

// Numbers
//          ...  ←  013  ←  012  
//                           ↑  
//                           ↑  
//                           ↑  
//  004  ←  003  ←  002     011  
//   ↓               ↑       ↑  
//   ↓               ↑       ↑  
//   ↓               ↑       ↑  
//  005     000  →  001     010  
//   ↓                       ↑  
//   ↓                       ↑  
//   ↓                       ↑  
//  006  →  007  →  008  →  009  
// Coordinates
//          ...  ←  1,2  ←  2,2
//                           ↑
//                           ↑
//                           ↑
// -1,1  ←  0,1  ←  1,1     2,1
//   ↓               ↑       ↑
//   ↓               ↑       ↑
//   ↓               ↑       ↑
// -1,0     0,0  →  1,0     2,0
//   ↓                       ↑
//   ↓                       ↑
//   ↓                       ↑
// -1,-1 →  0,-1 →  1,-1 →  2,-1
// The spiral starts at 0 which is located at coordinates (0,0), number 1 is at (1,0), number 2 is at (1,1), number 3 is at (0,1) and so on. The spiral always starts to the right and goes in an anti-clockwise direction.

// The returned value should be a tuple (for Python) and an array (for Javascript) in the (x,y) format.

// 100 fixed tests and another 500.000 random tests are performed with small numbers ranging from 0 to 100,000 .Another 500.000 random tests are performed with large numbers ranging from 100,000,000,000 to 100,000,000,000,000.

let squaredSpiral = (n) => {
  let sqrt = Math.floor(Math.sqrt(n)), rem = n - sqrt ** 2, x, y;
  if (sqrt % 2 == 0) {
    x = -Math.trunc(sqrt / 2) + Math.max(rem - sqrt, 0);
    y = Math.trunc(sqrt / 2) - Math.min(rem, sqrt);
  } else {
    x = Math.ceil(sqrt / 2) - Math.max(rem - sqrt, 0);
    y = -Math.floor(sqrt / 2) + Math.min(rem, sqrt);
  }
  return [x,y];
};
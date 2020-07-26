// 5kyu - The Snake in the Square 

// The Snake in the Square
// Story
// The snake genus python quadratum is known from the shape they adopt while moving, as it looks as if the snake was surrounded by a perfect squared frame. The migration season is comming soon, and some python students want to measure the length of the snakes. For that purpose they will buy some very expensive weight sensors, but they can't afford to buy as many as they wished. To save some money, the pythonists have to distribute the weight sensors wisely, taking advantage of the special shape of the python quadratum.

// Python quadratum shape example:
//     1  2  3  4  5
// 1  O_o ·  █▀ ▀ ▀█
// 2   █  ·  █  ·  █
// 3   █  ·  █  ·  █
// 4   █  ·  █  ·  ·   
// 5   █▄ ▄ ▄█  ·  ·   
// *notice that height and width are 5 for a snake of size 15

// Task
// You have to create a function that, given an expected size of the snake (size), returns a squared matrix, with the distribution of the sensors that are activated for a snake of that size. After reading the notes you will be able to know the exact position of a snake for a given size, and therefore you will have to place the sensors at the same positions where the snake will be.

// The items inside the returned matrix can have two values: 0 means there is no need of sensor there, 1 means that a sensor is needed at that position.

// Inputs:
// Length of the python (size>0)
// Outputs:
// 2D squared array (side x side) giving the positions of the activated sensors (1: snake there, 0 no snake).
// Notes
// The snake's head will always be at the top-left corner of the matrix
//   correct:        wrong:
//   1   O_o ·  ·        ·  · O_o   · O_o ·    ·  ·  ·
//   2    █  ·  █        █  ·  █    ·  █  ·    · O_o ·
//   3    █▄ ▄ ▄█        █▄ ▄ ▄█    ·  █▄ ▄    ·  █▄ ▄
// The snake's body will always go down from the head
//   correct:        wrong:
//   1   O_o ·  ·       O_o ▀ ▀█
//   2    █  ·  █        ·  ·  █
//   3    █▄ ▄ ▄█        ·  ▄ ▄█
// Each intermediate portion of the body touches exactly 2 body portions. That is to say that there is a space between two lines of body. In other words, the snake cannot touch itself.
//   correct:                          wrong:
//   1   O_o ·  ·   O_o ·  █▀ ▀ ▀█       O_o ·  ·   O_o ·  █▀ ▀ ▀█
//   2    █  ·  █    █  ·  █  ·  █        █  █  ·    █  ·  █  ·  █
//   3    █▄ ▄ ▄█    █  ·  █  ·  █        █▄ █  ·    █  █▀ ▀  ·  █
//   4               █  ·  █  ·  ·                   █  █  ·  ·  ·
//   5               █▄ ▄ ▄█  ·  ·                   █▄ █  ·  ·  ·
// The snakes always get the shape of the smallest possible square where they would fit.
//   correct:                              wrong:
//   1  6:O_o ·  ·   15:O_o ·  █▀ ▀ ▀█      6:O_o ·  ·     15:O_o ·  █▀ ▀▀ ▀▀ ·
//   2     █  ·  █       █  ·  █  ·  █         █  ·  ·         █  ·  █  ·  ·  ·
//   3     █▄ ▄ ▄█       █  ·  █  ·  █         █  ·  ·         █  ·  █  ·  ·  ·
//   4                   █  ·  █  ·  ·         █▄ ▄▄ ▄▄        █  ·  █  ·  ·  ·
//   5                   █▄ ▄ ▄█  ·  ·                         █  ·  █  ·  ·  ·
//   6                                                         █▄ ▄ ▄█  ·  ·  ·
// Examples
// Expected size: size = 5
// Returned value: [[1, 0, 0], [1, 0, 0], [1, 1, 1]]
// Activated sensors distribution would look like:
//     1  0  0
//     1  0  0
//     1  1  1
// Expected size: size = 8
// Returned value: [[1, 0, 0, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]]
// Activated sensors distribution would look like:
//     1  0  0  0
//     1  0  1  0
//     1  0  1  0
//     1  1  1  0
// Expected size: size = 15
// Returned value: [[1, 0, 1, 1, 1],[1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 0], [1, 1, 1, 0, 0]]
// Activated sensors distribution would look like:
// 1  0  1  1  1 
// 1  0  1  0  1
// 1  0  1  0  1
// 1  0  1  0  0
// 1  1  1  0  0

var distribution=function(size) {
  let side = Math.ceil((2+2*size)**.5-1);
  side += (side+1)*(side+1>>1) < size;
  let M = Array(side).fill(0);
  M = M.map(_=>M.slice());
  let dirs=[[1,0,side-1], [0,1,2], [-1,0,side-1], [0,1,2]],
      x=0, y=0, i=0, n=side-1, dx=1, dy=0;
  while(size-->0){
    M[x][y]=1;
    if(!n) [dx,dy,n] = dirs[i=(++i)%4];
    x+=dx; y+=dy; n--;
  }
  return M;
}
// 7kyu - Find Square Within a Given Rectangle

// Introduction
// You are going to be given an array of arrays of integers as a first argument, which represents a rectangle. As a second and third arguments you will be given center and side(length) of the inner square. Your task is to find inner square.

// Let's move on to examples, so it will be easier to understand.

// Examples
// let rect = [[0, 1, 2, 3, 4],
//            [5, 6, 7, 8, 9],
//            [10, 11, 12, 13, 14],
//            [15, 16, 17, 18, 19],
//            [20, 21, 22, 23, 24]];
// let res1 = innerSquare(rect, 12, 3), res2 = innerSquare(rect, 14, 3), res3 = innerSquare(rect, 0, 3);
// examples

// Results:

// res1 // [[6, 7, 8], [11, 12, 13], [16, 17, 18]]
// res2 // [[8, 9], [13, 14], [18, 19]]
// res3 // [[0, 1], [5, 6]]
// If the square is outside the boundaries of the rectangle, then it is clipped, as shown on the image.

// Task
// Write a function that returns array of arrays of integers which represents a inner square.

// Notes:

// rect: 3 <= rows <= 10, 3 <= cols <= 10

// rect[0] <= center <= rect[rect.length - 1]

// 0 < side < 10 - always an odd number

// There are more examples in test cases.

function innerSquare(rect, center, side) {
  let x = ~~(center / 6),
      y = rect[x].indexOf(center), 
      size = Math.round(side / 2) - 1, 
      arr = [];
  for (let i = -size; i <= size; i++) {
    let row = [];
    for (let j = -size; j <= size; j++) {
      let [a, b] = [x + i, y + j];
      if (rect[a] && rect[a][b] !== undefined)
        row.push(rect[a][b]);
    }
    if (row.length)
      arr.push(row);
  }
  return arr;
}
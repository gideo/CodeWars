// 7yu - Simple Fun #274: Diplomas

// Task
// In 10 years of studying, Alex has received a lot of diplomas. He wants to hang them on his wall, but unfortunately it's made of stone and it would be too difficult to hammer so many nails in it.

// Alex decided to buy a square desk to hang on the wall, on which he is going to hang his diplomas. Your task is to find the smallest possible size of the desk he needs.

// Alex doesn't want to rotated his diplomas, and they shouldn't overlap.

// Given the height h and the width w of each diploma, as well as their number n, find the minimum desk size.

// Input/Output
// [input] integer h

// The height of each diploma, 1 ≤ h ≤ 10000.

// [input] integer w

// The width of each diploma, 1 ≤ w ≤ 10000.

// [input] integer n

// The number of diplomas, 0 ≤ n ≤ 10000.

// [output] an integer

// The minimum desk size.

// Example
// For h = 2, w = 3 and n = 10, the output should be 9.

// A 9 x 9 square desk can hang all 10 diplomas.

// For h = 1, w = 1 and n = 1, the output should be 1.

// A 1 x 1 square desk can hang a 1 x 1 diploma.

// For h = 17, w = 21 and n = 0, the output should be 0.

// Alex has no diploma, so he doesn't need a desk ;-)

function diplomas(h, w, n) {
  if(n === 0) return 0;
  for(let i = 1; ; i++){
    let height = Math.floor(i / h),
        width = Math.floor(i / w);
    if(height * width >= n) return i;
  }
}
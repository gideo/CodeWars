// 5kyu - Numberpad Cipher 

// Numberpad cipher is an algorithm that encrypts and decrypts strings of non-zero digits.

// It is easiest understood by visualising a number pad with the following layout:

// 7 8 9
// 4 5 6
// 1 2 3
// The input string is translated digit by digit from left to right, and at each step we consider in which direction we need to move on the number pad to get from the current digit to the next. For example, a 5 followed by a 6, means moving to the right. We wrap around the edges of the number pad when necessary, so a 7 followed by a 9 means moving to the left. Each digit on the number pad corresponds to a direction of movement as follows:

// ↖ ↑ ↗
// ← o →
// ↙ ↓ ↘
// So a 1 is a down-left diagonal movement, 2 is down, etc. A 5 means no movement. For the first digit to encode, we assume that we start on position 1.
// As an example, let's see what we get for the following string:

// 2583

// To move from 1 (the starting position) to 2, we need to go right, i.e. 6.
// To move from 2 to 5 we need to go up, i.e. 8.
// 5 to 8 is up again, that is 8.
// To move from 8 to 3 we need to wrap around the top of the number pad and go up-right, that is 9.
// So the encrypted string is

// 6889

// To decrypt this string again, we start at position 1 and interpret each digit in the input string as a direction telling us where to go from the current position (you can check that, starting from 6889, this will take us back to 2583).

// Implement the Encrypt() and Decrypt() methods. The input will always be a string of digits between 1 and 9 (no zeroes).

const cypher = {
  1: {1:5, 2:6, 3:4, 4:8, 5:9, 6:7, 7:2, 8:3, 9:1},
  2: {1:4, 2:5, 3:6, 4:7, 5:8, 6:9, 7:1, 8:2, 9:3},
  3: {1:6, 2:4, 3:5, 4:9, 5:7, 6:8, 7:3, 8:1, 9:2},
  4: {1:2, 2:3, 3:1, 4:5, 5:6, 6:4, 7:8, 8:9, 9:7}, 
  5: {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9},
  6: {1:3, 2:1, 3:2, 4:6, 5:4, 6:5, 7:9, 8:7, 9:8},
  7: {1:8, 2:9, 3:7, 4:2, 5:3, 6:1, 7:5, 8:6, 9:4},
  8: {1:7, 2:8, 3:9, 4:1, 5:2, 6:3, 7:4, 8:5, 9:6},
  9: {1:9, 2:7, 3:8, 4:3, 5:1, 6:2, 7:6, 8:4, 9:5}
}
function decrypt(s) {
  const arr = s.split('');
  let fr = 1;
  let str = [];
  for (i = 0; i < arr.length; i++) {
    const cur = parseInt(arr[i])
    for (let x = 1; x <= 9; x++) {
      if (cypher[fr][x] === cur) {
        str.push(x)
        fr = x
        break;
      }
    }
  }
  return str.join('');
}

function encrypt(s) {
  const arr = s.split('');
  let fr = 1;
  let str = []
  arr.forEach(s => {
    const to = parseInt(s);
    str.push(cypher[fr][to])
    fr = to;
  })
  return str.join('');
}
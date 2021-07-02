// 5kyu - Simple Fun #221: Frog's Jumping

// Task
// Imagine that you are standing near a lake and watching frog John trying to get to the other bank. You can see some stones in front of him, and you know that John can make short jumps and long jumps. But that's not it. You also know that John is a magic frog: he is afraid of water, so he can cross the lake only by stones. Luckily, he can understand your words. Can you help him to get to the other side of lake?

// You are given an array with coordinates of the stones ahead of John. Initially John is standing on a stone with coordinate 0. If he stands on a stone with coordinate x, he can jump to the stones with coordinates x + 1 (make a short jump), or x + 2 (make a long jump).

// Find the shortest path to the other side (to the last stone) and return the sequence of '1's and '2's, where '1' is a short jump and '2' is a long one. If there are several answers, return lexicographically smallest.

// String A is lexicographically smaller than string B either if A is a prefix of B (and A ≠ B), or if there exists such index i (0 ≤ i < min(x.length, y.length)), that Ai < Bi, and for any j (0 ≤ j < i) Aj = Bj. The lexicographic comparison of strings is implemented by operator < in modern programming languages.

// Input/Output
// [input] integer array stones
// A sorted array of stones' coordinates. It is guaranteed that stones[0] = 0.

// [output] a string
// A sequence of '1's and '2's describing the shortest path to the other bank. It's guaranteed that the answer exists.

// Example:
// For stones = [0,1,2,3,5,6], the output should be "1221".

// Here are all possible paths:

// "11121", not the shortest one;

// "2121", one of the shortest ones, but not the lexicographically smallest;

// "1221", the shortest and the lexicographically smallest.

function frogsJumping(stones) {
  let ss = stones.map((s, i) => stones[i+1] && Math.abs(s-stones[i+1])).filter(Boolean), arr = [];
  for (let i = ss.length - 1; i >= 0;i--) {
    if (!ss[i-1] || (ss[i-1] + ss[i] !== 2)) { arr.unshift(ss[i]); }
    else { arr.unshift(2);i-- }
  }
  return arr.join('');
}
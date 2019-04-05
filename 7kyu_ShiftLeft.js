// 7kyu - Shift Left

// You are given two strings s and t. In a single move, you can choose any of two strings and delete the first (that is, the leftmost) character. After a move, the length of the string decreases by 1. You can't choose a string if it is empty.

// For Example:

// by applying a move to the string "where", the result is the string "here",
// by applying a move to the string "a", the result is an empty string "".
// You are required to make two given strings equal using the fewest number of moves. It is possible that, in the end, both strings will be equal to the empty string, and so, are equal to each other. In this case, the answer is obviously the sum of the lengths of the initial strings.

// Write a program that finds the minimum number of moves to make two given strings s and t equal.

// Note
// Both strings consist only of lowercase Latin letters.

function shiftLeft(s, t){
  let getIdx = function(a,b) {  
    for(let i = 0; i <= a.length; i++)
      if(b.endsWith(a.substring(i, a.length)))
        return i;
  }
  return getIdx(s,t) + getIdx(t,s);
}
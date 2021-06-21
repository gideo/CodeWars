// 6kyu - Lat Survivors Ep. 3 

// Given a list of strings (of letters and spaces), and a list of numbers:

// Considering the list of strings as a 2D character array, the idea is to remove from each column, starting from bottom, as many letters as indicated in the list of numbers. Then return the remaining letters in any order as a string.

// If there aren't enough letters, just remove those you can.
// The strings in the list will all be of the same length.
// The list of numbers will be of the same length as the strings in the list of strings.
// Strings will contain only lowercase letters and spaces.
// There can be duplicated letters and numbers.
// Example for these inputs: ["abc", " ", " a "] and numbers [0,4,1]

// "abc"        "ab "        "a  "
// "   "        "   "        "   "
// " a "   =>   "   "   =>   "   "
//  041          030          020
// So the output would be "a".

// If you like this kata, check out another one: Survivors Ep.4

function lastSurvivors(rows, nums) {
  let arr = [];
  
  for (let row = rows.length - 1; row >= 0; row--) {
    let split = rows[row].split("");
    for (let col = 0; col < split.length; col++) {
      if (nums[col] > 0 && split[col] != " ")  {
        nums[col]--;
        split[col] = "";
      }
    }
    arr.push( split.filter(c => c != " ").join("") );
  }
  
  return arr.join("");
}
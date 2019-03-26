// 7kyu - noobCode 03: CHECK THESE LETTERS... see if letters in "String 1" are present in "String 2"

// Write a function that checks if the letters in the second string are present in the first:

// letterCheck(["trances", "nectar"]) // true
// letterCheck(["compadres", "DRAPES"]) // true
// letterCheck(["parses", "parsecs"]) //false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

let letterCheck = (arr) => !new RegExp("[^"+arr[0]+"]", "gi").test(arr[1]);
// 8kyu - Squash the Bugs

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
  var spl = str.split(" "),
      longest = 0;
  
  for (var i in spl) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }

  return longest;
}
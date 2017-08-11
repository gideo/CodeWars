// 7kyu - Inspiring Strings

// When given a string of space separated words, return the word with the longest 
// length. If there are multiple words with the longest length, return the last 
// instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

function longestWord(stringOfWords){
  stringOfWords = stringOfWords.split(" ");
  let temp = "";
  for(let i = 0; i < stringOfWords.length; i++) {
    if(stringOfWords[i].length >= temp.length) {
      temp = stringOfWords[i];
    }
  }
  return temp;
}
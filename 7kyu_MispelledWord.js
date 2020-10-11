// 7kyu - Mispelled Word 

// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by only one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ only by one character.

function mispelled(word1, word2) {
  if(Math.abs(word1.length - word2.length) >= 2)
    return false;
  if(Math.abs(word1.length - word2.length) == 1)
    return (word1.includes(word2) || word2.includes(word1)); 
 let res = 0;
  for(let i = 0; i < word1.length; i++)
    if(word1[i] !== word2[i]){res += 1;}  
  return (res <= 1) ? true : false;
}
// 6 kyu - Password Generator

// Description:

// You need to write a password generator that meets the following criteria:

// 6 - 20 characters long
// contains at least one lowercase letter
// contains at least one uppercase letter
// contains at least one number
// contains only alphanumeric characters (no special characters)
// Return the random password as a string.

// Note: "randomness" is checked by counting the characters used in the generated 
// passwords - all characters should have less than 50% occurance. Based on extensive 
// tests, the normal rate is around 35%.


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function passwordGen(){
  let len = Math.round(Math.random() * (20 - 6) + 6),
      possibles = 'abcdefghijklmnopqrstuvwxyz'.split(""),
      lowers = ~~(Math.random() * (len/2 - 2)) + 2,
      uppers = ~~(Math.random() * (len/2 - lowers - 1)) + 1,
      num = (len - (lowers + uppers))
  let lowerCase = new Array(lowers).fill(0).map((a,i) => possibles[~~(Math.random() * 26)]),
      upperCase = new Array(uppers).fill(0).map((a,i) => possibles[~~(Math.random() * 26)].toUpperCase()),
      numbers = new Array(num).fill(0).map((a,i) => ~~(Math.random() * 10))
  return shuffleArray(lowerCase.concat(upperCase).concat(numbers)).join("");
}

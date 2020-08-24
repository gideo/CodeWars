// 6kyu - Jewel Thief 

// Story
// The word is on the street that you claim to be a safe-cracking jewel thief.

// But are you?

// This Kata will verify your safe-cracking abilities.

// Kata
// To prove you are a real thief you need to crack the combination of the safe, and then open it and tell me the value of the jewels inside!

// The safe object has two methods:

// Method	Parameter	Returns
// Type	Meaning
// `unlock`	combination	string	Sounds you can hear
// No Sound
// click	The first part of the combination is correct
// click-click	The first two parts of the combination are correct
// click-click-click	The combination is correct.
// Now you can turn the handle to open the safe.

// `open`	-	int	The value of the safe contents (range 0 - 100,000)
// Combination Format
// The safe combination is made up of 3 dial spins.

// safe-dial
// Spin the dial left L or right R
// Numbers on the dial 00 - 99
// Each part of the combination is separated by -

let crack = function(safe){  
  let str = "", s;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 200; j++){
      s = j % 100 < 10 ? "0" : "";
      s = str + (j > 99 ? "L" : "R") + s + j % 100;
      if(i == 0 && safe.unlock(s) == "click") break;
      if(i == 1 && safe.unlock(s) == "click-click") break;
      if(i == 2 && safe.unlock(s) == "click-click-click") break;
    }
    str = s + "-";
  }
  return safe.open();
}
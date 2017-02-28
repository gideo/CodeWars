// 6 kyu - Character limits: How long is your piece of string?

// Description:

// Cara is applying for several different jobs. The online application forms ask 
// her to respond within a specific character count. Cara needs to check that her 
// answers fit into the character limit.

// Annoyingly, some application forms count spaces as a character, and some don't.

// Your challenge:

// Write Cara a function charCheck() with the arguments:

// "text": a string containing Cara's answer for the question
// "max": a number equal to the maximum number of characters allowed in the answer
// "spaces": a boolean which is true if spaces are included in the character count 
// and false if they are not
// The function charCheck() should return an array: [true, "Answer"] , where "Answer" 
// is equal to the original text, if Cara's answer is short enough.

// If her answer "text" is too long, return an array: [false, "Answer"]. The second 
// element should be the original "text" string truncated to the length of the limit.

// For example:

// charCheck("Cara Hertz", 10, true) should return [ true, "Cara Hertz" ]
// charCheck("Cara Hertz", 9, false) should return [ true, "Cara Hertz" ]
// charCheck("Cara Hertz", 5, true) should return [ false, "Cara " ]
// charCheck("Cara Hertz", 5, false) should return [ false, "CaraH" ]

let charCheck = function(text, max, spaces) {    
    if(!spaces)
      text = text.replace(/\s/g, "");
    let length = text.length;
    return (length <= max) ? [true, text] : [false, text.substr(0, max)];
}
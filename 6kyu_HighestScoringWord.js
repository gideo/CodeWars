// 6kyu - Highest Scoring Word

// Given a string of words (x), you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet. 
// a=1, z=26 and everything inbetween.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lower case and all inputs will be valid.

function high(x) {
    x = x.split(" ");
    let [max, word] = [0, ""];
    for(let i = 0; i < x.length; i++) {
        let temp = x[i].length ? x[i].split("").map(a => a.charCodeAt(0)-96).reduce((a,b) => a + b) : x[i].charCodeAt(0)
        if(temp > max)
            [word, max ]= [x[i], temp]
    }
    return word;
}
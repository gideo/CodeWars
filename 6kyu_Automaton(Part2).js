// 6kyu - Automaton (Part 2)

// Preamble:

// You were cleaning your virtual pantry and accidentally found a folder with a label 
// on it: "Automaton v1.9".
// Part 2:

// After you're done with cleaning you noticed Manual.txt right next to Automaton's 
// folder.
// Manual for Automaton v1.9:

// - If automaton accepts "string" it will tell you the amount of vowels that string 
// contains.
// Example:

// automaton("String") // 1
// - If automaton accepts "number" it will tell you if this is a prime number. Example:
// Example:

// automaton(3); // true
// automaton(3.5); // false
// automaton(4); // false
// - If automaton accepts "object" it will give you another object with swapped keys / 
// values
// Example:

// automaton({"a": "b"}); // {"b": "a"}
// automaton([1, 0]); // {"0": "1", "1": "0"}
// automaton([]); // []

function automaton(val) {
    this.isPrime = function(n) {
        if(n === 2) { return true; }
        if(n < 2 || n % 2 === 0) { return false; }
        for(let i = 3; i <= Math.sqrt(n); i+=2) {
            if(n % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    this.swap = function(obj){
        let res = {};
        for(var key in obj){
            res[obj[key]] = key;
        }
        return res;
    }
    
    switch(typeof val) {
        case "string":
            return val.toLowerCase().replace(/[^aeiou]/gi, "").length;
        case "number":
            return (val % 1 === 0) ? isPrime(val) : false;
        case "object":
            return swap(val);
    }
}
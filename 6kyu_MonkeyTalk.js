// 6kyu - Monkey Talk 

// Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.

let monkeyTalk = p => (p.split(" ").map((word) => /[AEIOUaeiou]/.test(word[0]) ? "eek" : "ook").join(" ") + ".").replace(/^\w/, first => first.toLocaleUpperCase());

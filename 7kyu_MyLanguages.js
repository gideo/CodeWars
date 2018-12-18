// 7kyu - My Languages

// Your task
// Given a dictionary/hash/object of languages and your respective test results, return the list of languages where your test score is at least 60, in descending order of the results.

// Note: There will be no duplicate values.

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}  --> ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}   --> []
// My other katas
// If you enjoyed this kata then please try my other katas! :-)

// Translations are welcome!

let myLanguages = a => Object.keys(a).filter(b=>a[b]>=60).sort((x,y)=>a[y]-a[x]);
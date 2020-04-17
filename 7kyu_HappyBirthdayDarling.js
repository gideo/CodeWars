// 7kyu - Happy Birthday, Darling! 

// As you may know, once women pass their teens, they should only be celebrated for their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if she turns 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

// Note: input will be always > 21

// Examples:
// 32  -->  "32? That's just 20, in base 16!"
// 39  -->  "39? That's just 21, in base 19!"
// My other katas
// If you enjoyed this kata then please try my other katas! :-)

// Translations are welcome!

let womensAge = n => `${n}? That's just ${20+n%2}, in base ${Math.floor(n/2)}!`;
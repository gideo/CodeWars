// 7kyu - Band Name Generator

// My friend wants a new band name for her band. She like bands that use the formula: 
// 'The' + a noun with first letter capitalized.

// dolphin -> The Dolphin

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the 
// noun twice and connect them together with the first and last letter, combined into 
// one word like so (WITHOUT a 'The' in front):

// alaska -> Alaskalaska

// europe -> Europeurope

// Can you write a function that takes in a noun as a string, and returns her preferred 
// band name written as a string?

let bandNameGenerator = (function(str) {
  function capitalize(str) { return str[0].toUpperCase() + str.substr(1);}
  return function (str) {
    return (str[0] !== str[str.length-1]) ? `The ${capitalize(str)}` : `${capitalize(str + str.substr(1))}`
  }
})()
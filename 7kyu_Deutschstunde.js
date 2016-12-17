// 7 kyu - Deutschstunde

// Description:

// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

// (This Kata is a joke, there is no such grammar rule!)

let derDieDas = (function() {
  let vowels = "aeiouäöü";
  return function(wort) {
    let num = wort.toLowerCase().split('').filter(a => vowels.indexOf(a) >= 0).length;
    return ((num < 2) ? 'das ' : (num > 3) ? 'der ' : 'die ') + wort;
  }
}());
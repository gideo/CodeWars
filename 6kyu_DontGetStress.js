// 6kyu - Don't Get Stressed

// Every multi-syllable word in English has one stressed syllable.

// Words with 3 or more syllables ending in "-ic", "-sion", "-tion" or "-ious" have their penultimate syllable stressed:

// "ic" e.g. al-co-HO-lic
// "sion" e.g. co-HE-sion
// "tion" e.g. am-BI-tion
// "ious" e.g. de-LI-cious
// Words with 3 or more syllables ending in "-ty", "-al", "-ise" or "-ate" have their ante-penultimate (third from the end) syllable stressed:

// "ty" e.g. e-QUA-li-ty
// "al" e.g. o-RI-gi-nal
// "ise" e.g. STA-bi-lise
// "ate" e.g. co-LLA-bo-rate
// Write a function that returns the number of the syllable upon which the stress falls in each argument.

// The function should take a string comprised of two elements in the following order:

// A number representing the TOTAL number of syllables between 3 and 11 inclusive.

// One of the 8 word endings listed above.

// So a five-syllable word ending in "ty" should take the form of "5ty":

// function stress ("5ty") {}
// The returned value should also be a string comprised of two elements in the following order:

// A number representing the syllable on which the stress falls.

// The substring "pen" or "ante-pen" depending word ending argument.

// So...

// function stress ("5ty") {}
// // should return "3ante-pen"
// ...and...

// function stress ("10sion") {} //no pun intended!
// // should return "9pen"
// The function should return "invalid word" if:

// The total number of syllables (the first substring) is anything other than an integer between 3 and 11 inclusive.
// The letters (the second substring) are anything other than the 8 word endings listed above in upper or lower case.
// function stress ("12zione") {}
// // should return "invalid word"

// function stress ("11LIC") {}
// // should return "10pen"

function stress (word) {
  const penEndings = ["ic", "sion", "tion", "ious"],
        antePenEndings = ["ty", "al", "ise", "ate"];    
  let [_, num, end] = word.match(/^(\d*)(\w*)$/);
  if (+num > 11 || +num < 3 || ![...penEndings, ...antePenEndings].includes(end)) return "invalid word";
  return (penEndings.includes(end)) ? (num - 1) + "pen" : (num - 2) + "ante-pen";
}
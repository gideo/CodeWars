// 6kyu - Split string for Text-to-Speech API

// You bought an access to Text-to-Speech API and you want to utilise it by converting big amounts of text into audio files. Now, while you had no problems with copy-pasting things like audio files downloading from Stack Overflow, your API has a limitation - it accepts no more than 50 characters each call. So you decide to make multiple calls and then concat audio files you receive. However, you cannot just split your string into 50 characters long parts, because it will split sentence mid-word, resulting in (at best) funny spelling. How annoying!

// And to make it worse, your boss is performance-freak so he forbade you from using String.prototype.split and String.prototype.indexOf functions, saying you don't need these.

// Please leave punctuation as is. Also, for simplicity, don't remove spaces except for the last one from every part.

// Write a function splitText(text, max) that:

// will split the text into parts no longer than max
// will return an array with those parts
// will make sure text isn't going to be cut in the middle of a word
// will make parts as long as possible (API calls can be expensive)
// will return an empty array if no call is needed (text is empty)
// Examples:

// splitText("Abc cde", 50)  // ["Abc cde"]
// splitText("Abc cde", 5)   // ["Abc", "cde"]
// splitText("A b C d E", 5) // ["A b C", "d E"]
// splitText("Lorem ipsum dolor sit amet, consectetur adipiscing", 15) // ["Lorem ipsum", "dolor sit amet,", "consectetur", "adipiscing"]
// If you are bored, you can make following code true:

// splitText("abcde ", 5)    // will return ["abcde"]

let splitText = (text, max) => text.match(new RegExp(`(?=\\S).{1,${max}}(?!\\S)`, 'g')) || [];
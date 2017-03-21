// 6kyu - Format words into a sentence

// Description:

// Complete the method so that it formats the words into a single comma separated value. 
// The last word should be separated by the word 'and' instead of a comma. The method 
// takes in an array of strings and returns a single formatted string. Empty string values 
// should be ignored. Empty arrays or null/nil values being passed into the method should 
// result in an empty string being returned.

// formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
// formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
// formatWords([]) // should return ""

function formatWords(arr) {
    arr = (arr) ? arr.filter(a => a.length) : ""
    return (!arr.length) ? "" : (arr.length === 1) ? arr[0] : arr.slice(0, -1).join(", ") + ` and ${arr.slice(-1)}`
}
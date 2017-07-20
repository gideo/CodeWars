// 8 kyu - Contamination #1 -String-

// An AI has infected a text with a char!!

// This text is now fully mutated to this char.

// Example:

// before = "abc"
// char = "z"
// after = "zzz"
// If the text or the char are empty, return an empty string. There never will be a 
// case when both are empty as nothing is going on!!

function contamination(text, char){
  return text.replace(/./g, char);
}
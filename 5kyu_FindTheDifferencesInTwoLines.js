// 5kyu - Find the Differences in Two Lines 

// At first, it may look easy, but it isn't...
// Given two versions of the same line as arguments, you have to find the difference between them.
// You have to write a function which will find:

// The index where the changes begin
// The characters which were added
// The characters which were deleted
// and return an object with the following values:
// { index: integer, addedText: string, deletedText: string }
// Specification
// addedText and deletedText should be as short as possible.
// If it can be satisfied in several ways by equally short values, the returned object must have a maximum index.
// If the two string arguments are the same, then the function has to return the following
// {index: -1, addedText: '', deletedText: ''}
// Examples
// findDifferent('aasaa','asaa') // {index: 1, addedText: "saa", deletedText: "asaa"} - "incorrect"
// findDifferent('aasaa','asaa') // {index: 1, addedText: "", deletedText: "a"} - "correct"

// findDifferent("added", "added added")
// // {index: 0, addedText: "added ", deletedText: ""} - "incorrect"
// // {index: 5, addedText: " added", deletedText: ""} - "correct"

// findDifferent("Hello John, how are you?", "Hello Jane, how are you?") 
// // {index: 7, addedText: "ane", deletedText: "ohn"}

// findDifferent("Hello, how is going your day?", "Hey, how is going your day?")
// // {index: 2, addedText: "y", deletedText: "llo"}

// findDifferent('The same text', 'The same text') // {index: -1, addedText: '', deletedText: ''}; 

function findDifferent(str1, str2){
  const len1 = str1.length, len2 = str2.length;
  let h = 0, t = 0, lim = Math.min(len1, len2);
  while (h < lim && str1[h] === str2[h])
    h++;
  lim -= h;
  while (t < lim && str1[len1 - 1 - t] === str2[len2 - 1 - t]) t++;
  return { 
    index: str1 === str2 ? -1 : h,
    addedText: str2.slice(h, len2 - t), 
    deletedText:str1.slice(h, len1 - t)
  };
}
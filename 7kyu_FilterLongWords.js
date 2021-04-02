// 7kyu - Filter Long Words 

// Write a function filterLongWords that takes a string sentence and an integer n.

// Return a list of all words that are longer than n.

// Example:

// filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

let filterLongWords = (s,n) => s.split(" ").filter(x => x.length > n);
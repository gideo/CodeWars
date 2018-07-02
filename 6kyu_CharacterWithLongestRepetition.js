// 6kyu - Character with Longest Repetition

// For a given string s find the character c with longest consecutive 
// repetition and return a tuple (c, l) (in Haskell Just (Char, Int), in C# 
//   Tuple<char?, int>, in Shell a String of comma-separated values c,l, in 
//   JavaScript [c,l], in Ruby [c, l]) where l is the length of the repetition. 
// If there are two or more characters with the same l return the first.

// For empty string return ('', 0) (in Haskell Nothing, in C# 
//   Tuple<char, int>(null, 0), in Shell ,0, in JavaScript ["",0], in 
//   Ruby ["", 0]).

// Happy coding! :)

function longestRepetition(str) {
  if (!str) return ['', 0];
  let max = 1, count = 1, char = '';
  var arr = str.split('');
  arr.forEach((c, i) => {
    if (c === arr[i+1]) {
      count++;
      if (count > max) [max, char] = [count, c];
    } 
    else
      count = 1;
  });
  return [char, max]; 
}
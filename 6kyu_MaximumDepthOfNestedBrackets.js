// 6kyu - Maximum Depth of Nested Brackets

// Given a balanced string with brackets like: "AA(XX((YY))(U))" find the substrings that are enclosed in the greatest depth.

// Example:
// String:  A   A   (   X   X   (   (   Y   Y   )   )   (   U   )   )
// Level:        1        2  3       3  2  2    2  1

// Therefore, answer: { "YY" } since the substring "YY" is locked at the deepest level.
// If several substring are at the deepest level, return them all in a list in order of appearance.

// The string includes only uppercase letters, parenthesis '(' and ')'.
// If the input is empty or doesn't contain brackets, an array containing only the original string must be returned.

function stringsInMaxDepth(s) {
  let curr = '', open = 0, max = { depth: 0 };
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      open++;
      curr = '';
      if (max.depth < open) 
        max = { depth: open, strings: [] };
    }
    
    else if (s[i] === ')') {
      if (open === max.depth) 
        max.strings.push(curr);
      open--;
      curr = '';
    }
    
    else
      curr += s[i];
  }
  return max.depth ? max.strings : [ s ];
}
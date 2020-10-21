// 5kyu - Simple String Expansion 

// Consider the following expansion:

// solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
// solve("2(a3(b))" = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
// Given a string, return the expansion of that string.

// Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

// More examples in test cases.

// Good luck!

// Please also try Simple time difference

function solve(s) {
  while (s.includes('('))
    s = s.replace(/\d?\((\w*)\)/,(m,a)=>a.repeat(+m[0]||1));
  return s;
}
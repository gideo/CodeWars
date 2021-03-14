// 7kyu - Thinking & Testing: Sport Star 

// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

let testit = (act, s) => s.split('').map((x, i) => x == '_' ? act[i] == 'run' ? x : 'x' : act[i] == 'jump' ? x : '/').join('');
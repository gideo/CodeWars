// 6kyu - Thinking & Testing : Hail and Waterfall

// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

function testit(arr){
  let sequence = [arr];
  while (arr.some(Boolean)) {
    arr = arr.map(x => x < 3 ? 0 : x & 1 ? 3*x + 1 : x >> 1);
    sequence.push(arr);
  }
  return sequence.map(n => n.map(v => v ? v % 10 : '.').join`|`).join`\n`;
}
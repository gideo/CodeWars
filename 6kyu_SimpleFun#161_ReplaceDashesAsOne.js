// 6 kyu - Simple Fun # 161: Replace Dashes as One

// Description:

// Task

// If string has more than one neighboring dashes(e.g. --) replace they with one dash(-).

// Dashes are considered neighbors even if there is some whitespace between them.
// Example

// For str = "we-are- - - code----warriors.-"

// The result should be "we-are- code-warriors.-"
// Input/Output

// [input] string str
// [output] a string

function replaceDashesAsOne(str) {
  while(/\-(\s)+\-/g.test(str))
      str = str.replace(/\-(\s)+\-/g, "-");
  return str.replace(/[\-]+/g, "-");
}
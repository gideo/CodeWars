// 6kyu - Alphabetized

// The alphabetized kata
// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

// The input is restricted to contain no numerals and only words containing the english alphabet letters.

// Example:

// alphabetized("The Holy Bible") // "BbeehHilloTy"
// Inspired by Tauba Auerbach

function alphabetized(s) {
  s = s.replace(/[^A-Z]/ig, "").split("").map((a, i) => [a, i]).sort((a, b) => a[0].toLowerCase().charCodeAt(0) > b[0].toLowerCase().charCodeAt(0) ? 1 : a[0].toLowerCase().charCodeAt(0) < b[0].toLowerCase().charCodeAt(0) ? -1 : a[1] - b[1]);
  return s.map(a => a[0]).join("");
}
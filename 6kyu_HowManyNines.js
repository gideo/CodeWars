// 6kyu - How Many Nines?

// Ask a mathematician: "What proportion of natural numbers contain at least one digit 9 somewhere in their decimal representation?"

// You might get the answer "Almost all of them", or "100%".

// Clearly though, not all whole numbers contain a 9.

// In this kata we ask the question: "How many Integers in the range [0..n] contain at least one 9 in their decimal representation?"

// In other words, write the function:

// nines :: BigInt => BigInt
// Where, for example:

// nines(1n)  = 0n
// nines(10n) = 1n     // 9
// nines(90n) = 10n    // 9, 19, 29, 39, 49, 59, 69, 79, 89, 90
// When designing your solution keep in mind that your function will be tested against some large numbers (up to 10^38)

function nines(n) {
  let g = n => n == 1 ? 1n : 10n**(--n) + 9n*g(n);
  if (n < 10n) return n == 9 ? 1n : 0n
  let s = n.toString(), h = BigInt(s[0]), t = BigInt(s.slice(1)), a = BigInt(s.length-1),
      r = h == 9 ? t + 1n : nines(t)
  return h * g(a) + r
}
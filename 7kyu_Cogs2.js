// 7kyu - Cogs 2

// Kata Task
// See also https://www.codewars.com/kata/cogs

// You are given a list of cogs in a gear train

// Each element represents the number of teeth of that cog

// e.g. [100, 50, 25] means

// 1st cog has 100 teeth
// 2nd cog has 50 teeth
// 3rd cog has 25 teeth
// If the nth cog rotates clockwise at 1 RPM what is the RPM of the cogs at 
// each end of the gear train?

// Notes

// return an array whose two elements are RPM of the leftmost and rightmost 
// cogs respectively
// use negative numbers for anti-clockwise rotation
// for convenience n is zero-based

function cogRpm(c, n) {
  let d = [1,-1];
  return [ d[n % 2] * c[n] / c[0], d[(c.length - n + 1) % 2] * c[n] / c[c.length-1] ];
}
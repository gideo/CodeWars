// 7kyu - Unlucky Days

// Friday 13th or Black Friday is considered as unlucky day. Calculate 
// how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Precondition: 1000 < |year| < 3000

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
// Note: for Ruby consider using the Gregorian Calendar instead of the 
// default one (Italian), to have results coherent with other languages.

let unluckyDays = year => Array.from({ length: 12 }).filter((a, idx) => new Date(year, idx, 13).getDay() === 5).length;
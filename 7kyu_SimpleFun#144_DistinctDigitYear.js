// 7kyu - Simple Fun #144:Distinct Digit Year

// Task
// The year of 2013 is the first year after the old 1987 with only distinct digits.

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

// Input/Output
// [input] integer year

// 1000 ≤ year ≤ 9000

// [output] an integer

// the minimum year number that is strictly larger than the input number year and all it's digits are distinct.

function distinctDigitYear(year){
  return /(.).*\1/.test(`${year+1}`) ? distinctDigitYear(year+1) : year+1;
};
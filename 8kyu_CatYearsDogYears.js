// 8kyu - Cat Years, Dog Years
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years 
// years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or 
// [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
  return [humanYears,(humanYears - 1 ? 16 : 11 ) + 4 * humanYears,(humanYears > 1 ? 9 + (5 * (humanYears - 2)) : 0) + 15];
}
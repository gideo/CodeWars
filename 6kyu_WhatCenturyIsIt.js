// 6kyu - What Century is It? 

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year){
  let num = Math.ceil(year/100);
  return num + (num < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][num % 10] || 'th');
}
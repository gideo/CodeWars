// 7kyu - Date Formatter 

// You are to implement a getDate function, which takes a unix timestamp and a locale as input and returns the formatted date based on the locale.

// Example: getDate(1481020142, 'en-GB') -> '06/12/2016'

// A list with the different locale formats is pre-loaded as "formats".

let getDate = (uts, loc) => require('moment').unix(uts).format((formats[loc] || 'DD/MM/YYYY').toUpperCase());
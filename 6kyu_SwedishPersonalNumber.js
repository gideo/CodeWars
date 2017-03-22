// 6kyu - Swedish Personal Number

// Description:

// Write a Regex that would test for a valid Swedish personal number (ID). In Sweden this 
// number is formatted multiple ways (I have no idea why) so you would have to check all 
// these possibilities. This will be used to validate an input form.

// YYYYMMDD-XXXX

// YYYYMMDD+XXXX

// YYYYMMDDXXXX

// The first set refers to the birth date (year can be formatted just 2 characters or as 
// 	full year) and the four X at the end are random numbers.

// RegExp should test just for people born between year 1900 and current year (2016). 
// Also don't worry about moth of February and consider all months having at most 31 
// days.

function validatePersonalNumber (personalNumber) {
  var regex = new RegExp(/^(19[0-9]{2}|200[0-9]|201[0-6])(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])[+-]?([0-9]{4})$/)
  return regex.test(personalNumber);
}
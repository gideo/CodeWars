// 6kyu - Simple Fun #103: New Holiday 

// Task
// John Doe likes holidays very much, and he was very happy to hear that his country's government decided to introduce yet another one. He heard that the new holiday will be celebrated each year on the xth week of month, on weekDay.

// Your task is to return the day of month on which the holiday will be celebrated in the year yearNumber.

// For your convenience, here are the lists of months names and lengths and the list of days of the week names.

// Months: "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December". Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31. Days of the week: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday". Please, note that in leap years February has 29 days.

// Example
// For x = 3, weekDay = "Wednesday", month = "November" and yearNumber = 2016, the output should be 16.

// The new holiday will be celebrated every November on the 3rd Wednesday of the month. In 2016 the 3rd Wednesday falls on the 16th of November.

// For x = 5, weekDay = "Thursday", month = "November" and yearNumber = 2016, the output should be -1.

// There are only 4 Thursdays in November 2016.

// Input/Output
// [input] integer x

// A positive integer.

// Constraints: 1 ≤ x ≤ 5.

// [input] string weekDay

// A string representing a correct name of some day of the week.

// [input] string month

// A string representing a correct name of some month.

// [input] integer yearNumber

// Constraints: 2015 ≤ yearNumber ≤ 2500.

// [output] an integer

// The day of month on which the holiday will be celebrated in the year yearNumber. If there is no answer, return -1.

function holiday(x, weekDay, month, yearNumber) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  yearNumber % 4 === 0 && (monthDays[1] = 29);
  let firstMonthsDay = new Date(`${month}, ${yearNumber}`).getDay(), index = daysOfTheWeek.indexOf(weekDay), count = 0;
  if (index > firstMonthsDay) {
    count = index - firstMonthsDay + 1;
  } else if (index < firstMonthsDay) {
    count = 7 - firstMonthsDay + index + 1;
  } else {
    count = 1;
  }
  let output = count + ((x - 1) * 7);
  return output > monthDays[months.indexOf(month)] ? -1 : output;
}
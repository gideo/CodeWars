// 6 kyu - Count the days!
// Description:

// Little Annie is very excited for upcoming events. She want's to know how many days she have to 
// wait for a specific event.

// Your job is to help her out.

// Task: Write a function which returns the number of days from today till the given date. The 
// function will take a Date object as parameter. You have to round the amount of days.

// If the event is in the past, return "The day is in the past!" 
// If the event is today, return "Today is the day!" 
// Else, return "x days"

// PS: This is my first kata. I hope you have fun^^ 

let countDays = function(d) {
  let date = new Date(d), curr = new Date();
  let days = Math.round((date - curr) / (1000 * 60 * 60 * 24));
  return (days >= 1) ? `${days} days` : (days === 0) ? "Today is the day!" : "The day is in the past!";
}
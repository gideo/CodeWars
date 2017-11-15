// 7kyu - When's the next train to Brighton?


// Write a function that tells you when is the next train to Brighton you can take, 
// given the time of day and the minutes it takes you to get to the station.

// There is one train every half an hour from 05:00 to 23:30.

// The current time is represented by a string in the format "hh:mm". The minutes 
// you need to arrive at the station are also represented by a string.

// The result is a string that says "The next train is at hh:mm" (see examples below).

// If it's too late for the last train of the day (e.g. it's 23:50 and you need 40 
// minutes to get to the station), the function returns "The next train is at 05:00.".

// EXAMPLES

// nextTrain("17:40", "30") => "The next train is at 18:30."
// nextTrain("23:20", "25") => "The next train is at 05:00."
// nextTrain("03:36", "95") => "The next train is at 05:30."


function nextTrain(time, minutes){
  time = new Date(new Date("1970/1/1 " + time).getTime() + minutes * 60 * 1000);
  let res = (time.getMinutes() >= 31) ? `${time.getHours()+1}:00` : `${time.getHours()}:30`;
  if (time.getHours() <= 4 || (time.getHours() === 23 && time.getMinutes() > 30)) res = '05:00'
  return `The next train is at ${('0'+res).slice(-5)}.`
}
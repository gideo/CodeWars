// 7kyu - Target Date

// You have an amount of money a0 > 0 and you deposit it with a constant 
// interest rate of p% > 0 per year on the 1st of January 2016. You want 
// to have an amount a >= a0.

// #Task: The function date_nb_days (or dateNbDays...) with parameters 
// a0, a, p will return, as a string, the date on which you have just 
// reached a.

// #Example: date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

// date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

// #Notes:

// The return format of the date is "YYYY-MM-DD"
// The deposit is always on the "2016-01-01"
// If p% is the rate for a year the rate for a day is p divided by 36000 
// since banks consider that there are 360 days in a year.
// You have: a0 > 0, p% > 0, a >= a0

function dateNbDays(a0, a, p) {
  let dailyRate = p / 36000;
  for(var days = 1; a0 < a; days++)
    a0 += a0 * dailyRate;
  
  let d = new Date('2016-01-01');
  d.setDate(days);
  return d.toISOString().substr(0,10);
}
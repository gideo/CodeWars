// 7kyu - 1st day of month that are Sunday in a year range

// You will write a function that receive 2 parameters, 2 different years, to indicate a range of time.

// The function will return the number of times a month between those years begin on Sunday, meaning the 1st day of the month is Sunday.

// If there is only one year provided, return the number of times a month begin on Sunday on that year.

// For instance: between 1901 and 2000, a month began on Sunday 171 times.

function getTotalSundays (yearInit, yearEnd) {
  let num = 0;
  for (let year = yearInit; year <= (yearEnd || yearInit); year++) {
    for (let month = 0; month < 12; month++)
      if ((new Date(year, month, 1)).getDay() === 0)
        num++;
  }
  return num;
}
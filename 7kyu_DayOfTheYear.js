// 7kyu - Day of the Year

// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// Don't forget to check for whether it's a leap year! Three criteria must be taken 
// into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.

let toDayOfYear = ([d,m,y]) => (new Date(y,m-1,d) - new Date(y,0,1))/864E5+1
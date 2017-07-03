// 6kyu - Running Average

// Python:

// Create a function running_average() that returns a callable function object. 
// Update the series with each given value and calculate the current average.

// r_avg = running_average()
// r_avg(10) = 10.0
// r_avg(11) = 10.5
// r_avg(12) = 11
// All input values are valid. Round to two decimal places.

// This Kata is based on a example from Fluent Python book.

// Javascript // Lua:

// Create a function runningAverage() that returns a callable function object. 
// Update the series with each given value and calculate the current average.

// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;

function runningAverage() {
    let arr = [];
    return function(n) {
        arr.push(n);
        let avg = (arr.reduce((a,b) => a + b)/arr.length);
        return (String(avg % 1).length > 3) ? Math.round(avg*100)/100 : avg;
    }
}
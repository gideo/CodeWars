// 5 kyu - Histogram - V1

// Description:

// Background
// A 6-sided dice is rolled a number of times and the results are plotted as a 
// character-based histogram.

// Example:

//     10
//     #
//     #
// 7   #
// #   #
// #   #     5
// #   #     #
// # 3 #     #
// # # #     #
// # # # 1   #
// # # # #   #
// -----------
// 1 2 3 4 5 6
// Task

// You will be passed all the dice roll results, and your task is to write the code to return a string representing a histogram, so that when it is printed it has the same format as the example.

// Notes

// There are no trailing spaces on the lines
// All lines (including the last) end with a newline \n
// A count is displayed above each bar (unless the count is 0)
// The number of rolls may vary but is never more than 100

var histogram = function(results) {
    let highest = Math.max(...results);
    let str = "";
    for(let i = highest; i >= 0; i--){
        str += Array(6).fill(0).map((a, idx) => (results[idx] === i && results[idx] !== 0) ? results[idx] : (results[idx] < i || results[idx] === 0) ? " " : "#").join(" ").replace(/\s*$/,"")+"\n";
    }
    return (highest) ?  str += "-----------\n1 2 3 4 5 6\n" : "-----------\n1 2 3 4 5 6\n";
}
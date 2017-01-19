// 6 kyu - Statistics for an Athletic Association

// Description:

// You are the "computer man" of a local Athletic Association (C.A.A.). Many teams of runners 
// come to compete. Each time you get a string of all race results of every team who has run. 
// For example here is a string showing the individual results of a team of 5:

// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

// Each part of the string is of the form: h|m|s where h, m, s are positive or null integer 
// (represented as strings) with one or two digits. There are no traps in this format.

// To compare the results of the teams you are asked for giving three statistics; range, 
// average and median.

// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest 
// value is 3, and the highest is 9, so the range is 9 − 3 = 6.

// Mean or Average : To calculate mean, add together all of the numbers in a set and then 
// divide the sum by the total count of numbers.

// Median : In statistics, the median is the number separating the higher half of a data 
// sample from the lower half. The median of a finite list of numbers can be found by arranging 
// all the observations from lowest value to highest value and picking the middle one (e.g., 
// the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there 
// is an even number of observations, then there is no single middle value; the median is then 
// defined to be the mean of the two middle values 
// (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

// Your task is to return a string giving these 3 values. For the example given above, the 
// string result will be

// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
// of the form:

// "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"
// where hh, mm, ss are integers (represented by strings) with each 2 digits.

// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""

function toSeconds(str){
    return str.split("|").reverse().reduce((a,b,idx) => +a + b*Math.pow(60,idx));
}

function toHMS(seconds){
    let hours = Math.floor(seconds/3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds/60);
    seconds = seconds % 60;
    return `${(hours<10)? '0'+hours:hours}|${(minutes<10)? '0'+minutes:minutes}|${(seconds<10)?'0'+seconds:seconds}`;
}

function mean(arr){
    return ~~(arr.reduce((a,b)=>a+b)/arr.length);
}

function range(arr){
    arr = arr.slice(0).sort((a,b)=>a-b);
    return (arr.length === 1) ? 0 : arr.pop() - arr.shift();
}

function median(arr){
    arr = arr.slice(0).sort((a,b)=>a-b);
    return (arr.length === 1) ? arr[0]:(arr.length%2===0) ? ~~((arr[arr.length/2-1]+arr[arr.length/2])/2): arr[~~(arr.length/2)];
}

let stat = function(str) {
    if(str.length === 0) { return '';}
    str = str.replace(/\s/g, '').split(",").map(a=>toSeconds(a));
    let avg = toHMS(mean(str)), rng = toHMS(range(str)), med = toHMS(median(str));
    return (`Range: ${rng} Average: ${avg} Median: ${med}`);
}
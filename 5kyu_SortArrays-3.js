// 5kyu - Sort Arrays-3 

// This time the input is a sequence of course-ids that are formatted in the following way:

// name-yymm
// The return of the function shall first be sorted by yymm, then by the name (which varies in length).

let compare = (a, b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b);
let sortme = (courses) => courses.sort(compare);
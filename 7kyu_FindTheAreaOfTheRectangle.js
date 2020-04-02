// 7kyu - Find the Area of the Rectangle 

// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

// This kata is meant for beginners. Rank and upvote to bring it out of beta!

let area = (d,l) => d <= l ? "Not a rectangle" : +(l * Math.sqrt((d*d)-(l*l))).toFixed(2);
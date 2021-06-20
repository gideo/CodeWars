// 7kyu - Which Triangle is that?

// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.
// For example:

// typeOfTriangle(2,2,1) --> "Isosceles"

const typeOfTriangle = function (a, b, c) {
  if ( typeof a !== "number" || typeof b !== "number" || typeof c !== "number" ) return "Not a valid triangle";
  if ( a + b <= c || a + c <= b || c + b <= a ) return "Not a valid triangle";
  if ( a === b && b === c ) return "Equilateral";
  if ( a === b || b === c || a === c ) return "Isosceles"
  return "Scalene";
}
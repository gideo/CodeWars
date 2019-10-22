// 8kyu - Area of a Square

// Write the function squareArea ( or square_area ) that finds the area of the red square when you have the length of the circular arc A.

// Graph

// Use π = Math.PI ( M_PI in PHP )
// Round to two decimals

function squareArea(A){
  let circum = 4 * A;
  let radius = circum / (2 * Math.PI);
  let area = Math.pow(radius, 2);
  return Math.round(area*100)/100
}
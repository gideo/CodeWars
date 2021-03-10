// 7kyu - Area of an Annulus

// Area of an annulus
// When given the length of the arrow as a, where a is an integer and ≥ 1, calculate the area of the annulus (the grey ring).

// annulus

// Round the answer to two decimal places. In case you need pi, you can use the standard Math.PI/M_PI. 

let annulusArea = a => Math.round(Math.PI * a * a * 25) / 100;
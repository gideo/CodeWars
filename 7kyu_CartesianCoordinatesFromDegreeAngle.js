// 7kyu - Cartesian Coordinate from Degree Angle 

// Write a simple function that takes polar coordinates (an angle in degrees and a radius) and returns the equivalent cartesian coordinates (rouded to 10 places).

// For example:

// coordinates(90,1)
// => (0.0, 1.0)

// coordinates(45, 1)
// => (0.7071067812, 0.7071067812)

let coordinates = (d,r) => [ +(r * Math.cos(d * Math.PI / 180)).toFixed(10), +(r * Math.sin(d * Math.PI / 180)).toFixed(10) ];
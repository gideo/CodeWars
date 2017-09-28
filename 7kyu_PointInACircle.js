// 7kyu - Point in a unit circle

// Write a function that returns true if a given point (x,y) is inside of an unit circle 
// (that is, a "normal" circle of radius one) centered at the origin (0,0) and return 
// false if the point is outside.

// Input

// x: The first coordinate of the given point.
// y: The second coordinate of the given point.
// Notes

// The region bounded by the circle is considered to be an open disk, so points on the 
// boundary of the circle should return false.
// We are using the euclidean metric.

function pointInCircle(x,y){
  return Math.pow(x,2) + Math.pow(y,2) < 1;
}
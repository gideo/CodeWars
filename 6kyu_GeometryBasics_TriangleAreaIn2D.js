// 6 kyu - Geometry Basics: Triangle Area in 2D

// Description:

// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes. Triangle objects have attributes a, b, c describing 
// their corners, each of them is a Point.

// Write a function calculating area of a Triangle defined this way.

// Tests round answers to 6 decimal places.

function triangleArea(t) {
  return Math.abs((t.a.x * (t.b.y - t.c.y) + t.b.x * (t.c.y - t.a.y) + t.c.x * (t.a.y - t.b.y)) / 2);
}
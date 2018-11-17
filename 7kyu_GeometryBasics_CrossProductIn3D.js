// 7kyu - Geometry Basics: Cross Product in 3D
// This series of katas will introduce you to basics of doing geometry with computers.

// Vector objects have x, y, and z attributes.

// Write a function calculating cross product of Vector a and Vector b.

// You can read more about cross product on Wikipedia.

// Tests round answers to 6 decimal places.

let crossProduct = (v1, v2) => new Vector(
  v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x
);
// 7kyu - Stacked Balls - 3D (Triangle Base)

// Background
// I have stacked some cannon balls in a triangle-based pyramid.

// Like this,

// cannon balls triangle base
// Kata Task
// Given the number of layers of my stack, what is the total height?

// Return the height as multiple of the ball diameter.

// Example
// The image above shows a stack of 3 layers.

// Notes
// layers >= 0
// approximate answers (within 0.001) are good enough

let stackHeight3d = layers => layers ? 1 + (layers - 1) * Math.sqrt(6) / 3 : 0;
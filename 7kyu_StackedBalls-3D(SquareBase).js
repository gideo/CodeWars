// 7kyu - Stacked Balls - 3D (Square Base)

// Background
// I have stacked some cannon balls in a square pyramid.

// Like this,

// cannon balls
// Kata Task
// Given the number of layers of my stack, what is the total height?

// Return the height as multiple of the ball diameter.

// Example
// The image above shows a stack of 4 layers.

// Notes
// layers >= 0
// approximate answers (within 0.001) are good enough

let stackHeight3d = l => l==0?0:l-(l-1)*0.29289322;
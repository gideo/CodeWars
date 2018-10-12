// 7kyu - Stacked Balls - 2D
// Background
// I have stacked some pool balls in a triangle.

// Like this,

// pool balls

// Kata Task
// Given the number of layers of my stack, what is the total height?

// Return the height as multiple of the ball diameter.

// Example
// The image above shows a stack of 5 layers.

// Notes
// layers >= 0
// approximate answers (within 0.001) are good enough

function stackHeight2d(layers) {
  return (layers < 1) ? 0 : ((layers - 1) / 2 * Math.sqrt(3) + 1).toFixed(3);
}
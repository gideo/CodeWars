// 6kyu - Linear Color Gradient 

// You need to write a function that takes array of n colors and converts them to a linear gradient

// for example gradient

// from [r1, g1, b1] with position p1 to [r2, g2, b2] with position p2

// in order to get the color of the gradient from p1 to p2, you need to find three functions Fr, Fg and Fb of the form f(x) = a + bx for red, green and blue with

// [Fr(p1), Fg(p1), Fb(p1)] = gradient(p1) and [Fr(p2), Fg(p2), Fb(p2)] = gradient(p2)

// gradient can contain more than two colors, in which case gradient (p) returns a color that is interpolated between two colors with positions p1 and p2 such that p1 < p < p2 (see usage)

// Input
// Array of colors in RGB format and its positions [[r, g, b], position]

// r, g, b - float numbers from 0 to 255

// position - float number from 0 to 1

// Output
// Function that map float number in range [0, 1] to color [r, g, b].

// r, g and b is a float numbers
// if there is no color with the position p < number return the color with the lowest position
// if there is no color with the position p > number return the color with the highest position
// if two or more colors has a same position take last
// if array is empty gradient must return [0, 0, 0]

// Usage


// // red, yellow, green, etc. - [r,g,b] arrays
// // for example red = [255, 0, 0]
// let rainbowGradient = createGradient([
//   [red, 0], 
//   [yellow, 0.2],
//   [green, 0.4],
//   [blue, 0.8],
//   [violet, 1]
// ])
// // from 0 to 0.2 gradient between red and yellow
// rainbowGradient(0.1) // orange = [255, 127, 0]

// // from 0.4 to 0.8 gradient between green and blue
// rainbowGradient(0.6) // [0, 127, 127]

function createGradient(colors) {
  if (!colors.length)
    return n => [ 0, 0, 0 ];
  let map = new Map();
  
  for (let color of colors)
    map.set(color[1], color);

  let arr = Array.from(map.values()).sort((a, b) => a[1] - b[1]);
  return n => {
    let pos = 0;
    while (pos < arr.length && n > arr[pos][1]) pos++;
    if (pos === 0) return arr[0][0];
    if (pos === arr.length)
      return arr[arr.length - 1][0];
    let [ c1, p1 ] = arr[pos - 1], [ c2, p2 ] = arr[pos];
    return c2.map((c, i) => (c - c1[i]) * (n - p1) / (p2 - p1) + c1[i]);
  }

}
// 6kyu - D&D: Non-Euclidian Movement

// Context
// In Dungeons and Dragons, a tabletop roleplaying game, movement is limited in combat. Characters can only move a set amount of distance per turn, meaning the distance you travel is very important.

// In the 5th edition of the rulebook, the board is commonly organized into a grid, but for ease of counting, movement is non-euclidian. Each square is 5 ft, and moving diagonally counts the same as moving in a cardinal direction.

// +------------------------+
// | 10 | 10 | 10 | 10 | 10 |
// +------------------------+
// | 10 |  5 |  5 |  5 | 10 |
// +------------------------+
// | 10 |  5 | :) |  5 | 10 |
// +------------------------+
// | 10 |  5 |  5 |  5 | 10 |
// +------------------------+
// | 10 | 10 | 10 | 10 | 10 |
// +------------------------+
// Distance of each grid cell from the player, in feet
// Your task
// Create an algorithm to calculate the distance of a movement path. You will be provided with the path as a series of absolute grid points (x, y, z). Take in to account both horizontal (x, y) as well as vertical (z) movement. Vertical movement is governed by the same rules, for the sake of simplicity.

function calcDistance(path) {
  let distance = 0;
  for (let i = 0; i < path.length-1; i ++) {
    let x = path[i][0] - path[i+1][0];
    if (x < 0) x *= -1;
    let y = path[i][1] - path[i+1][1];
    if (y < 0) y *= -1;
    let z = path[i][2] - path[i+1][2];
    if (z < 0) z *= -1;
  
    let dist = x*5;
    if (y*5 > dist) dist = y*5;
    if (z*5 > dist) dist = z*5;
    distance += dist;
  }
  return distance;
}
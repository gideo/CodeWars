// 5kyu - Pirate Island Conquer Part 3

// This kata is part of a series:

// Pirate Island Conquer Part 1

// Pirate Island Conquer Part 2


// Quick start
// The rules of this ship are the same as before but...

// Now there are sharks! The first mate is deathly afraid of sharks. An island has sharks if there is an 's' one square to the north, south, east or west of an island. This island has sharks in all those positions:

// '~', 's', '~'
// 's', 'u', 's'
// '~', 's', '~'
// And now there is treasure! We like treasure. An island has treasure if it is one square to the north, south east or west of an island.

// Aboard your ship, you have some rules for choosing an island to conquer...


// Rules (highest priority first)
// Conquer an unoccupied island. If there are no unoccupied islands, conquer one of the marines' islands (but better a "sharked" island than marines...).
// Conquer an island with the least number of sharks.
// Conquer the island closest to any of our home islands (the p items / distances are computed as Manhattan distances).
// If there is a tie, conquer the island with more treasures!

// Complete Instructions
// You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:


// Map
//                       y
//          0    1    2    3    4    5    6    7

//   0    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   1    ['~', '~', '~', '~', 's', 'p', '~', '~'],
//   2    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   3    ['p', 't', 'u', '~', '~', '~', '~', '~'],
// x 4    ['~', '~', '~', '~', 'm', '~', '~', '~'],
//   5    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   6    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   7    ['~', '~', '~', '~', '~', '~', '~', '~']];
// Where:

// 'p' = pirate (that's our home island). There will always be at least one home island.
// 'u' = unoccupied island
// 'm' = island occupied by marines
// 't' = treasure!
// 's' = shark
// '~' = ocean waves
// The map size will always be 8 x 8. Each of 'p', 'u', 'm' and '~' can occur in any space of the map.
// Coordinates are given as [x,y] (examples from the above map: 'p' at [0, 0], 'u' at [3, 2], 'm' at [4, 4]).


// Input
// A see map, formatted as an array of arrays of strings.

// Output
// Return an array containing all the best candidates (ordered by lowest x coordinate, then lowest y), or an empty array if no island to conquer.


// Examples:
// Example 1:

//   map = [
//     ['~', 't', 'u', 't', '~', '~', '~', '~'],
//     ['~', '~', '~', 'p', '~', '~', '~', '~'],
//     ['u', 't', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', 'p', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', 'u']];
// solution = [[0, 2]]
// There are several unoccupied islands, but we'll return the one with the most treasure nearby.


//   map = [
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', 'p', '~', '~', '~'],
//     ['~', '~', 'm', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', 's', 'u', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', 'p']];
// solution = [[4, 4]]
// It's higher priority to take an unoccupied island with sharks than an island with marines.


//   map = [
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', 'p', 'm', '~', '~', '~', '~'],
//     ['m', 't', 'm', 'p', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', 'm', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', 'm', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~']];
// solution = [[2, 0], [2, 2]]
// There are two islands that can claim that one treasure, so it's a tie.

function conquerIsland(map) {
  let islands = { "p": [], "u": [], "m": [] };
  for (let i = 0; i < map.length; i++)
    for (let j = 0; j < map[i].length; j++)
      if (map[i][j] in islands) islands[map[i][j]].push([i, j]);
  let surroundFunc = type => ([i, j]) => [i&&map[i-1][j], map[i+1]&&map[i+1][j], map[i][j-1], map[i][j+1]].reduce((a, b) => a + +(b === type), 0);
  let sharks = surroundFunc("s"),
      dist = (p1, p2) => Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]),
      pDist = island => Math.min(...islands["p"].map(i => dist(i, island))),
      treasure = surroundFunc("t");
  let compare = (p1, p2) => {
    if (sharks(p1) !== sharks(p2)) return sharks(p1) - sharks(p2);
    if (pDist(p1) !== pDist(p2)) return pDist(p1) - pDist(p2);
    if (treasure(p1) !== treasure(p2)) return treasure(p2) - treasure(p1);
    return 0;
  };
  let takeable = (islands["u"].length > 0) ? islands["u"] : islands["m"];
  let ret = [];
  for (let island of takeable) {
    if (ret.length === 0 || compare(island, ret[0]) < 0) {
      ret = [island];
    } else if (compare(island, ret[0]) === 0) {
      ret.push(island);
    }
  }
  return (ret.length === 1) ? ret[0] : ret;
}
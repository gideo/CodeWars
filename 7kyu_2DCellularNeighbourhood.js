// 7kyu - 2D Cellular Neighbourhood

// The neighbourhood of a cell (in a matrix) are cells that are near to it. 
// There are two popular types:

// The Moore neighborhood are eight cells which surround a given cell.
// The Von Neumann neighborhood are four cells which share a border with the 
// given cell.
// Task
// Given a neighbourhood type ("moore" or "von_neumann"), a 2D matrix and a 
// pair of coordinates, return the list of neighbours of the given cell.

// Notes:

// The order of the elements in the output list is not important.
// If the input indexes are outside the matrix, return an empty list.
// If the the matrix is empty, return an empty list.
// Examples
// \ n   0    1    2    3    4
// m  --------------------------
// 0  |  0 |  1 |  2 |  3 |  4 |
// 1  |  5 |  6 |  7 |  8 |  9 |
// 2  | 10 | 11 | 12 | 13 | 14 |
// 3  | 15 | 16 | 17 | 18 | 19 |
// 4  | 20 | 21 | 22 | 23 | 24 |
//    --------------------------

// get_neighborhood("moore", arr, (1,1)) == [0, 1, 2, 5, 7, 10, 11, 12]
// get_neighborhood("moore", arr, (0,0)) == [1, 6, 5]
// get_neighborhood("moore", arr, (4,2)) == [21, 16, 17, 18, 23]
// get_neighborhood("von_neumann", arr, (1,1)) == [1, 5, 7, 11]
// get_neighborhood("von_neumann", arr, (0,0)) == [1, 5]
// get_neighborhood("von_neumann", arr, (4,2)) == [21, 17, 23]

function get_neighbourhood(type, arr, coordinates){
  let length = arr.length, [x,y] = coordinates;
  if (length === 0 ||(coordinates[0] < 0 || coordinates[0] >= length || coordinates[1] < 0 || coordinates[1] >= length)) return [];
  let init = [[x + 1, y],[x - 1, y],[x, y + 1],[x, y - 1]];
  if (type === "moore")
    init = [...init, [x + 1, y + 1], [x + 1, y - 1], [x - 1, y + 1], [x - 1, y - 1]];   
  return init.filter( ([a, b]) => a >= 0 && a < length && b >= 0 && b < length).map(([a, b]) => arr[a][b]);
}
// 6kyu - Connect the Dots 

// Kata Task
// Connect the dots in order to make a picture!

// Notes
// There are 2-26 dots labelled a b c ...
// Make lines to connect the dots a -> b, b -> c, etc
// The line char is *
// Use only straight lines - vertical, horizontal, or diagonals of a square
// The paper is rectangular - \n terminates every line
// All input is valid

function connectTheDots(paper) {
  let chars = paper.match(/[a-z]/g).sort(), grid = paper.split(/[\r\n]/).map(s => s.split(""));
  let getXY = (char) => {
    for(let y = 0; y < grid.length; y++)
      for(let x = 0; x < grid[y].length; x++)
        if ( grid[y][x] === char )
          return {x, y};
  };
  let normalize = (v) => Math.min(1, Math.max(-1, v)), resultGrid = grid.map(r => [...r]);
  for(let i = 0; i < chars.length - 1; i++) {
    let {x, y} = getXY(chars[i]), end = getXY(chars[i+1])
    let yMove = normalize(end.y - y), xMove = normalize(end.x - x);
    for(; (!xMove || x !== end.x) && (!yMove || y !== end.y); x += xMove, y += yMove)
      resultGrid[y][x] = "*";
    resultGrid[y][x] = "*";
  }
  
  return resultGrid
    .map(row => row.join(""))
    .join("\n");
}
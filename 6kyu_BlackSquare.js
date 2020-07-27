// 6kyu - Black Square 

// Polycarp has a checkered sheet of paper of size N ×M. Polycarp painted some of cells with black, the others remained white. Inspired by Malevich's "Black Square", Polycarp wants to paint minimum possible number of white cells with black so that all black cells form a square.
//  You are to determine the minimum possible number of cells needed to be painted black so that the black cells form a black square with sides parallel to the painting's sides. All the cells that do not belong to the square should be white. The square's side should have positive length.

// Input:
//  Array with N strings contain M letters 'B' or 'W' each — the description of initial cells' colors. If a letter is 'B', then the corresponding cell is painted black, otherwise it is painted white.

// Output:
//  Return the minimum number of cells needed to be painted black so that the black cells form a black square with sides parallel to the painting's sides. All the cells that do not belong to the square should be white. If it is impossible, print -1.

// Examples:

// (['WWWW',
//   'WWWB',
//   'WWWB',    =>  5
//   'WWBB',
//   'WWWW'])

// (['BB'])     =>  -1

// (['WWW',
//   'WWW',     =>  1
//   'WWW'])
// Note:
//  In the first example it is needed to paint 5 cells — (1, 1), (1,2), (2, 1), (2, 2) and (3, 1). Then there will be a square with side equal to three, and the upper left corner in (1, 1).
//  In the second example all the cells are painted black and form a rectangle, so it's impossible to get a square.
//  In the third example all cells are colored white, so it's sufficient to color any cell black.

// (c)KAN

function blackSquare(a){
  let count = 0, mni = 200, mxi = 0, mnj = 200, mxj = 0;
  for(let i = 0; i < a.length; i++)
    for(let j = 0; j < a[0].length; j++)
      if(a[i][j] == 'B') {
        count++;
        mnj = Math.min(mnj, j); mni = Math.min(mni, i);mxj = Math.max(mxj, j); mxi = Math.max(mxi, i);
      }   
  if(mxi-mni+1>a[0].length || mxj-mnj+1>a.length) return -1;  
  if(!count) return 1;
  return Math.pow(Math.max(mxi-mni+1, mxj-mnj+1), 2)-count;
}
// 7kyu - Principal Diagonal |VS| Secondary Diagonal
// 
//                                       W-A-R
// Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from north-west to south-east. An example of this diagonal :
// [1,0,0]
// [0,1,0]
// [0,0,1]

// elements of Principal Diagonal 1, 1, 1 .

// Secondary Diagonal -- the secondary diagonal of amatrix identifies those elements of the matrix running from north-east to south-west. An example of this diagonal :

// [0,0,1]
// [0,5,0]
// [2,0,0]

// elements of Seconrady Diagonal 1, 5, 2 .



// 3+8+2 > 0+8+0 => return 'Principal diagonal win!'

// Your task is to find which diagonal is larger (which a diagonal have bigger sum of their elements).

// If the primary diagonal is larger,--> return "Principal Diagonal win!".

// If the secondary diagonal is larger,--> return "Secondary Diagonal win!".

// if it's draw,--> return "Draw!".

// You will always receive matrices of the same dimension


function diagonal(matrix){
   let p = matrix.reduce((a, b, i) => a + b[i], 0),
       s = matrix.reduce((a, b, i) => a + b[b.length - 1 - i], 0);
   return (s === p) ? "Draw!" : ((p > s) ? "Principal" : "Secondary") + " Diagonal win!";
}
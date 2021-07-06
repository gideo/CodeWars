// 6kyu - #8: Treaure Map

// Description
// You find a treasure map that record the location of the hidden treasure:

// [
// ["X" ,"W3","E2","S3","S4"],
// ["S1","E1","N1","S2","W1"],
// ["S2","E1","N2","S1","N3"],
// ["N1","X" ,"S2","E1","W4"],
// ["X" ,"E3","X" ,"N2","W4"]
// ]
// "X" is the place where the treasure is likely to be buried. But there are more than one "X", Which is the right place? We need to know the correct way to read the map:

// We always start from the center of the map(You can assume that the width and height of the map are odd). N,S,E,W means North, South, East and West. Like most maps:

//       North
//         |
// West  --+--  East
//         |
//       South
// The number that behind N,S,W,E is how many step that we should move. In the map above, the center of map is "N2", so we need move to North with 2 step, and then we got a code "E2", so we move to East with 2 step, and so on..

// "N2"-->"E2"-->"S4"-->"W4"-->"X"
// Ok, after some moves, we got the "X", we need return the array index of this "X"

// [4,0]
// Sometimes, the treasure map is fake. It does not record the correct information of the treasure, and we should return null/None. For example:

// [
// ["X" ,"W3","E2","S3","S4"],
// ["S1","E1","N1","S2","W1"],
// ["S2","E1","N4","S1","N3"],
// ["N1","X" ,"S2","E1","W4"],
// ["X" ,"E3","X" ,"N2","W4"]
// ]

// The code at center("N4") is invalid.
// Or like this:

// [
// ["X" ,"W3","E2","S3","S2"],
// ["S1","E1","N1","S2","W1"],
// ["S2","E1","N2","S1","W2"],
// ["N1","X" ,"S2","E1","W4"],
// ["X" ,"E3","X" ,"N2","E4"]
// ]

// Path "N2"-->"E2"-->"S2"-->"W2" into an infinite loop
// Task
// Complete function findX that accepts an argument m. Returns the result in accordance with the rules above.

function findX(m){
 let arr = [], x1 = m.length / 2 | 0, y1 = m[0].length / 2 | 0;
 while(m[x1][y1] != "X"){
   let a = m[x1][y1][0], b = m[x1][y1].slice(1);
    switch(a){
        case "N": x1 -= +b; break;
        case "S": x1 += +b; break;
        case "W": y1 -= +b; break;
        case "E": y1 += +b; break;
    }   
   if(x1 < 0 || y1 < 0 || x1 >= m.length || y1 >= m[0].length || arr.includes(`${x1}${y1}`)) return null;
   arr.push(`${x1}${y1}`)
  }
  return [x1, y1];
}
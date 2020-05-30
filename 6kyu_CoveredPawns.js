// 6kyu - Covered Pawns 

// Given a list of white pawns on a chessboard (any number of them, meaning from 0 to 64 and with the possibility to be positioned everywhere), determine how many of them have their backs covered by another. Pawns attacking upwards since we have only white ones.

// Please remember that a pawn attack(and defend as well) only the 2 square on the sides in front of him. https://en.wikipedia.org/wiki/Pawn_(chess)#/media/File:Pawn_(chess)_movements.gif

// This is how the chess board coordinates are defined:

function coveredPawns(pawns){
  return pawns.filter(function(pawn){
    let row = Number(pawn.charAt(1)), col = pawn.charAt(0),
        first = 'abcdefgh'.charAt('abcdefgh'.indexOf(col)-1) + (row-1),
        second = 'abcdefgh'.charAt('abcdefgh'.indexOf(col)+1) + (row-1);
    return pawns.indexOf(first)+1 || pawns.indexOf(second)+1 ? true : false;
  }).length;
}
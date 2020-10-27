// 5kyu - Check that the Situation is Correct 

// Task
// Write a program that uses the image of the Tic-Tac-Toe field to determine whether this situation could have occurred as a result of playing with all the rules.
// Recall that the game of "Tic-Tac-Toe" is played on a 3x3 field. Two players take turns. The first puts a cross, and the second – a zero. It is allowed to put a cross and a zero in any cell of the field that is not yet occupied. When one of the players puts three of his signs in the same horizontal, vertical or diagonal, or when all the cells of the field are occupied, the game ends.

// Input/Output
// Input: a 9-character string describing the playing field, the "_" symbol indicates an empty cell. It is guaranteed that the string contains only the characters "X", "0", "_".

// Output: True if this situation can occur during a fair game according to the rules and False otherwise.

// Examples

// is_it_possible("XXX"+\
//                "XXX"+\
//                "XXX")    # Should return False

// is_it_possible("0XX"+\
//                "XX0"+\
//                "00X")    # Should return True

// is_it_possible("XXX"+\
//                "0_0"+\
//                "___")    # Should return True

// is_it_possible("___"+\
//                "___"+\
//                "___")    # Should return True

// is_it_possible("XXX"+\
//                "000"+\
//                "___")    # Should return False

function isItPossible(field) {
  let strs = [ "x..x..x", "^(xxx|...xxx|......xxx)", "x...x...x", "..x.x.x.." ];
  let wins = (x,xs) => strs.some( r => RegExp( r.replace(/x/g, x) ).test(xs) );
  let count = (x,xs) => xs.split(x).length-1;
  let countX = count("X", field), countO = count("0", field),
        winX = wins("X", field), winO = wins("0", field); 
  let oPlayFirst = countO>countX || (countO==countX && winX) || (countO<countX && winO);
  let two = winX && winO, xPlayTwice = (countX - countO) > 1;
  let wrong = oPlayFirst || two || xPlayTwice;
  return ! wrong
}
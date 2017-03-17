// // 5 kyu - Did I Finish my Sudoku?
// Description:

// Write a function done_or_not passing a board (list[list_lines]) as parameter. If the 
// board is valid return 'Finished!', otherwise return 'Try again!'

// Sudoku rules:

// Complete the Sudoku puzzle so that each and every row, column, and region contains the 
// numbers one through nine only once.

// Rows:
// 5 3 8 6 9 7 4 1 2

// There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 
// 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In 
// other words, there can not be any rows that are identical.

// In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be 
// changed. The remaining numbers in black are the numbers that you fill in to complete 
// the row.

// Columns:
// 7
// 4
// 8
// 5
// 9
// 2
// 1
// 3
// 6

// There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, 
// every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, 
// there may not be any duplicate numbers in any column. Each column will be unique as 
// a result.

// In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. 
// You fill in the remaining numbers as shown in black to complete the column.

// Regions
// 4 5 1
// 6 9 7
// 3 2 8

// A region is a 3x3 box like the one shown to the left. There are 9 regions in a 
// traditional Sudoku puzzle.

// Like the Sudoku requirements for rows and columns, every region must also contain 
// the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in 
// any region. Each region will differ from the other regions.

// In the illustration the numbers 1, 2, and 8 are the "givens". They can not be 
// changed. Fill in the remaining numbers as shown in black to complete the region.

// Valid board example:

// [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
// [6, 7, 2, 1, 9, 5, 3, 4, 8],
// [1, 9, 8, 3, 4, 2, 5, 6, 7],
// [8, 5, 9, 7, 6, 1, 4, 2, 3],
// [4, 2, 6, 8, 5, 3, 7, 9, 1],
// [7, 1, 3, 9, 2, 4, 8, 5, 6],
// [9, 6, 1, 5, 3, 7, 2, 8, 4],
// [2, 8, 7, 4, 1, 9, 6, 3, 5],
// [3, 4, 5, 2, 8, 6, 1, 7, 9]]

// For those who don't know the game, here are some information about rules and how 
// to play Sudoku: 

function checkVector(arr) {
    for(let i = 1; i < 10; i++)
        if(arr.indexOf(i) < 0)
            return false;
    return true;
}

function doneOrNot(board) {
    let [region1, region2, region3, valid] = [[], [], [], true];
    for(let i = 0; i < board.length; i++) {
        if(!checkVector(board[i]))
            valid = false;
    }
    for(let i = 0; i < 9; i++) {
        let arr = []
        for(let j = 0; j < 9; j++)
            arr = arr.concat(board[j][i]);
        if(!checkVector(arr))
            valid = false;
    }
    for(let i = 0; i < 9; i++) {
        [region1, region2, region3] = [region1.concat(board[i].slice(0,3)), 
                                       region2.concat(board[i].slice(3,6)),
                                       region3.concat(board[i].slice(6,9))]
        if((i+1)%3 === 0) { 
            if(!checkVector(region1) || !checkVector(region2) || !checkVector(region3))
              valid = false;
            [region1, region2, region3] = [[], [], []]
        }
    }
    return valid ? "Finished!" : "Try again!";
}
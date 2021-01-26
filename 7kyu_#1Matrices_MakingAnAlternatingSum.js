// 7kyu - #1 Matrices: Making an Alternating Sum 

// We have a matrix of integers with m rows and n columns.

// source: imgur.com

// We want to calculate the total sum for the matrix:

// source: imgur.com

// As you can see, the name "alternating sum" of the title is due to the sign of the terms that changes from one term to its contiguous one and so on.

// Let's see an example:

// matrix = [[1, 2, 3], [-3, -2, 1], [3, - 1, 2]]

// total_sum = (1 - 2 + 3) + [-(-3) + (-2) - 1] + [3 - (-1) + 2] = 2 + 0 + 6 = 8
// You may be given matrixes with their dimensions between these values:10 < m < 300 and 10 < n < 300.

// More example cases in the Example Test Cases. Enjoy it!!

function scoreMatrix(matrix) {
    let score = 0;
    for (var i = 0; i <= matrix.length - 1; i++) {
        let scoreRow = 0;
        for (var j = 0; j <= matrix[i].length - 1; j ++)
            scoreRow += (Math.pow(-1,i+j + 2)) * matrix[i][j];
        score += scoreRow;
    }
    return score;
}
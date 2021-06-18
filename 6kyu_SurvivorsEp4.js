// 6kyu - Survivors Ep. 4

// Description
// Consider some subject, who has some initial momentum and is travelling through an array (powerups).

// momentum is an integer that represents the "distance" the subject can travel through the array. Each index travelled requires one unit of momentum. (The subject starts outside of the array, so it requires 1 momentum to get to index 0).

// powerups is an array of integers which the subject is travelling through. At each index, the value there is added to the subject's total momentum.

// If at any point through the array, the subject's momentum is below 1, the subject stops there, and does not successfully make it through. If the subject does make it to the last index of the array, with at least 1 momentum remaining (required to leave the array), it has successfully reached the "other side".

// Examples:

// momentum = 3 and powerups = [0,0,0] - No success (it finished in the last index).

// momentum = 3 and powerups = [0,1,0] - Success

// Resume
// You are given a list of momentum listOfMomentum and a list of powerups listOfPowerups(a 2D list of numbers). You have to check it for each pair of listOfMomentum[index] and listOfPowerups[index].

// Return indexes of sublists where there was enough momentum.

// Notes
// The sublists in listOfPowerups can be of a different length.
// listOfMomentum will be of same length as listOfPowerups.
// listOfMomentum and sublists of listOfPowerups only contain integers from 0 to 9.
// There can be duplicated numbers.
// The numbers in the result must be in order.
// Example for:

// listOfMomentum = [3, 2, 1, 0]  and

// listOfPowerups = [[1, 0, 0], [0, 2, 0, 0], [0, 9], [8, 8]

// listOfMomentum[0] = 3
// listOfPowerups[0]  = [1, 0, 0]

// listOfMomentum[1] = 2
// listOfPowerups[1]  = [0, 2, 0, 0]

// listOfMomentum[2] = 1
// listOfPowerups[2]  = [0, 9]

// listOfMomentum[3] = 0
// listOfPowerups[3]  = [8, 8]
// So, the output will be [0]

// If you like this kata, check out another one: Survivors Ep.5

function survivors(listOfMomentum, listOfPowerups) {
    let arr = [];
    listOfMomentum.forEach((momentum, i) => {
        let curr = momentum;
        if (curr < 1)
            return;
        for (let j = 0 ; j < listOfPowerups[i].length ; j++) {
            curr += listOfPowerups[i][j] - 1;
            if (curr < 1)
                return;
        }
        arr.push(i);
    });
    return arr;
}
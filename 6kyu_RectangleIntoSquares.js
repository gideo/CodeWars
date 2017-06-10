// 6kyu - Rectangle into Squares

// The drawing below gives an idea of how to cut a given "true" rectangle into squares 
// ("true" rectangle meaning that the two dimensions are different).

// alternative text

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)
// You will return an array with the size of each of the squares.

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]
// #Note: lng == wdth as a starting case would be an entirely different problem and the 
// drawing is planned to be interpreted with lng != wdth. See kata, Square into Squares. 
// Protect trees!.

// When the initial parameters are so that lng == wdth, the solution [lng] would be the 
// most obvious but not in the spirit of this kata so, in that case, 
// return None/nil/null/Nothing. Return {} with C++.

// In that case the returned structure of C will have its sz component equal to 0. (See 
//     the "Solution" and "Examples" tabs)

//   sqInRect(5, 5) should return null

function sqInRect(lng, wdth) {
    if(lng === wdth) { return null; }
    let arr = [];
    while(lng !== wdth) {
        if(lng > wdth){
            arr.push(wdth);
            lng -= wdth;
        } else {
            arr.push(lng);
            wdth -= lng;
        }
    }
    arr.push(arr[arr.length-1])
    return arr;
}
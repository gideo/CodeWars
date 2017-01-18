// 6 kyu - Calculate String Rotation

// Description:

// Write a function that receives two strings and returns n, where n is equal to the 
// number of characters we should shift the first string forward to match the second.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string 
// has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:

// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1

let rotate = function(str){
    return str.charAt(str.length-1) + str.substr(0, str.length-1);
}

let shiftedDiff = function(first, second){
    for(let i = 0; i <= second.length; i++){
        if(first === second) { return i; }
        first = rotate(first);
    }
    return -1;
}
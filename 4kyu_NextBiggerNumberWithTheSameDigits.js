// 4kyu - Next bigger number with the same digits

// Description:

// You have to create a function that takes a positive integer number and returns the 
// next bigger number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

var swap = function(str, idx1, idx2) {
    var arr = str.split(""), temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr.join("");
}

var getPivot = function(str, compare) {
    for(var i = str.length; str > 0; i--) {
        if(str[i] > compare)
            return i;
    }
    return str.length - 1;
}

var nextBigger = function(str) {
    str = str.toString();
    for(var i = str.length-1; i >= 0; i--) {
        if(str[i] > str[i-1]) {
            str = swap(str, i-1, getPivot(str, str[i-1]));
            return parseInt(str.substring(0, i) + str.substring(i).split("").map( a => parseInt(a)).sort( (a, b) => a - b).join(""));
        }
    }
    return -1;
}
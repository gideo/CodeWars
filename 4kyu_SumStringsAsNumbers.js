// 4kyu - Sum Strings as Numbers

// Description:

// Given the string representations of two integers, return the string representation of 
// the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten 
// numerals "0" to "9".

function sumStrings(a, b) {
    var arrA = a.split("").reverse().map( a => parseInt(a)), arrB = b.split("").reverse().map( b => parseInt(b));
    var maxLength = Math.max(a.length, b.length), carry = 0, num = "";

    for(var i = 0; i < maxLength; i++) {
        if(isNaN(arrA[i])) { arrA.push(0);}
        if(isNaN(arrB[i])) { arrB.push(0);}
        
        if(arrA[i] + arrB[i] + carry > 9) {
            num += ((arrA[i] + arrB[i] + carry) % 10).toString();
            carry = 1;
            if (i === maxLength - 1 && carry === 1)
                num += "1";
        }  else {
            num += ((arrA[i] + arrB[i] + carry) % 10).toString();
            carry = 0;
        }
    }
    return num.split("").reverse().join("").replace(/\b0+/g, '');
}
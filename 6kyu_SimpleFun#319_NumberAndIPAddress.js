// 6kyu - Simple Fun #319: Number and IP Address

// Task

// An IP address contains four numbers(0-255) and separated by dots. It can be 
// converted to a number by this way:

// Example IP address: 10.0.3.193

// Convert each number to a 8-bit binary string
// (may needs to pad leading zeros to the left side)
// 10  -->  00001010
// 0   -->  00000000
// 3   -->  00000011
// 193 -->  11000001

// Combine these four strings:
// 00001010 00000000 00000011 11000001

// And then convert them to a decimal number:
// 167773121
// Given a string s represents a number or an IP address. Your task is to convert it 
// to another representation(number to IP address or IP address to number).

// You can assume that all inputs are valid.

// Input/Output

// [input] string s

// A number or IP address in string format.

// [output] a string

// A converted number or IP address in string format.

// Example

// For s = "10.0.3.193", the output should be "167773121".

// For s = "167969729", the output should be "10.3.3.193".

function numberAndIPaddress(s) {
    if(!/\./.test(s)) {
        s = (s >>> 0).toString(2)
        return ("0".repeat(32-s.length) + s).split(/(\d{8})/).filter(str=>!!str).map(a => parseInt(a,2)).join(".");
    }
    s = s.split(".").map(a => {
        temp = (a >>> 0).toString(2)
        return temp.length < 8 ? "0".repeat(8 - temp.length) + temp : temp;
    })
    return String(parseInt(s.join(""),2));    
}
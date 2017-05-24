// 5 kyu - String Incrementer

// Your job is to write a function which increments a string, to create a new string. 
// If the string already ends with a number, the number should be incremented by 1. 
// If the string does not end with a number the number 1 should be appended to the 
// new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementOne(str) {
    let lead = str.replace(/[1-9]+[0-9]*$/, "").length,
        trail = str.replace(/^[0]+/g, "");
    if(lead === str.length) return str.substr(0, lead-1) + 1;
    if(String(+trail + 1).length > trail.length) return str.substr(0, lead-1) + (+trail + 1);
    return str.substr(0, lead) + (+trail + 1);
}

function incrementString(str) {
    if(!/[\d]+/.test(str))
        return str + "1";
    return str.replace(/[\d]+/, incrementOne);
}
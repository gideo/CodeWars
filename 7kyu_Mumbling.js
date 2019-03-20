// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    return s
        .toLowerCase()
        .split('')
        .map((el, index) => {
            let str = el.repeat(index + 1);
            str = str.charAt(0).toUpperCase() + str.slice(1);
            return str;
        })
        .join('-');
}
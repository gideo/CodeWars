// 6kyu - Backspaces in String

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');
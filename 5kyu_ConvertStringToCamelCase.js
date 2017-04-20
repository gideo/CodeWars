// 5kyu - Convert string to camel case

// Description:

// Complete the method/function so that it converts dash/underscore delimited words into 
// camel casing. The first word within the output should be capitalized only if the 
// original word was capitalized.

// Examples:

// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior") 

// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

function capitalize(str, index) {
    str = str.split("");
    str[index] = str[index].toUpperCase();
    return str.join("");
}

function toCamelCase(str){
    for(var i = 1; i < str.length; i++){
        if(str[i-1] === "-" || str[i-1] === "_")
            str = capitalize(str, i);
    }
    return str.replace(/[\_\-]/g, "");
}
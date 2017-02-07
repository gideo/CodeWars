// 6 kyu - CamelCase Method

// Description:

// Write simple .camelcase method for strings. All words must have their first letter 
// capitalized without spaces.

// For instance:

// 'hello case'.camelcase => HelloCase
// 'camel case word'.camelcase => CamelCaseWord
// Don't forget rate this kata! Thanks :)

String.prototype.camelCase = function(){
    return this.split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1)).join("")
}
// Exclamation marks series #3: Remove all exclamation marks from sentence 
// except at the end

// Description:

// Remove all exclamation marks from sentence except at the end.

// Examples

// remove("Hi!") == "Hi!"
// remove("Hi!!!") == "Hi!!!"
// remove("!Hi") == "Hi"
// remove("!Hi!") == "Hi!"
// remove("Hi! Hi!") == "Hi Hi!"
// remove("Hi") == "Hi"

let remove = s => s.replace(/!+([^!])/g, '$1');
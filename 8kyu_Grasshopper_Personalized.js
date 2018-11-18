// 8kyu - Grasshopper - Personalized

// Personalized greeting

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// ======= case | return --- | --- name equals owner | 'Hello boss' otherwise | 'Hello guest'

let greet = (n,o) => n === o ? 'Hello boss' :   'Hello guest';
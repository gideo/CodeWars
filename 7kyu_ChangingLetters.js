// 7kyu - Changing Letters

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

let swap = st => st.replace(/[aeiou]/g, s => "AEIOU"["aeiou".indexOf(s)]);
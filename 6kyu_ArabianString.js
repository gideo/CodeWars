// 6kyu - Arabian String

// You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

// Don't presume the separators too much or you could be surprised.

// For example: (Input --> Output)

// "example name" --> "ExampleName"
// "your-NaMe-here" --> "YourNameHere"
// "testing ABC" --> "TestingAbc"

let camelize = str => str && str.length ? str.split(/[^A-Za-z0-9]/).filter(w=>w!="").map(w=>w[0].toUpperCase()+w.slice(1).toLowerCase()).join`` : "";
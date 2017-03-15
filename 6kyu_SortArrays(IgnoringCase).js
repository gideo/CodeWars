// 6 kyu - Sort Arrays(Ignoring Case)

// Description:

// Simple sort, but this time sort regardless of upper / lower case.

// So the input of

// [ "Hello", "there", "I'm", "fine"]
// is translated to
// ["fine", "Hello", "I'm", "there" ]

const sortme = names => names.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
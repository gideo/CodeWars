// 6kyu - What the biggest search keys?

// Description:

// You're a programmer in a SEO company. The SEO specialist of your company gets the 
// list of all project keywords everyday, then he looks for the longest keys to analyze 
// them.

// You will get the list with keywords and must write a simple function that returns the 
// biggest search keywords and sorts them in lexicographical order.
// For instance you might get:

// 'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'
// And your function should return:

// "'bigkey1', 'bigkey2'"
// Don't forget to rate this kata! Thanks :)

function theBiggestSearchKeys(...args) {
  let maxLength = Math.max(...args.map(a => a.length)),
      result = args.filter(a => a.length === maxLength).sort().map(a => `'${a}'`).join(', ');
  return (result.length === 0) ? '\'\'' : result;
}
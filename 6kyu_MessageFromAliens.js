// 6kyu - Message from Aliens 

// Task
// Aliens send messages to our planet, but they use a very strange language. Try to decode the messages!

function decode(m) {

  let cipher = { 
       '/\\': 'a',
        ']3': 'b',
         '(': 'c',
        '|)': 'd',
        '[-': 'e',
        '/=': 'f',
       '(_,': 'g',
       '|-|': 'h',
         '|': 'i',
        '_T': 'j',
        '/<': 'k',
        '|_': 'l',
     '|\\/|': 'm',
      '|\\|': 'n',
        '()': 'o',
        '|^': 'p',
       '()_': 'q',
        '/?': 'r',
      '_\\~': 's',
       '~|~': 't',
       '|_|': 'u',
       '\\/': 'v',
    '\\/\\/': 'w',
        '><': 'x',
        '`/': 'y',
       '~/_': 'z',
        '__': ' ' 
  }

  return m
    .split(new RegExp('[\\' + m[0] + ']+', 'g'))
    .slice(1, -1)
    .map(t => cipher[t])
    .reverse()
    .join('');

}
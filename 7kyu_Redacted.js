// 7kyu - Redacted!

// Meanwhile... somewhere in a Pentagon basement

// Your job is to compare two confidential documents that have come into your possession.

// The first document has parts redacted, and the other one doesn't.

// But the original (unredacted) document might be a fake!

// You need to compare the two documents and decide if it is possible they are the same or not.
// Kata Task

// Return true if the two documents are possibly the same. Return false otherwise.
// Notes

//     Each document is made of any visible characters, spaces, punctuation, and newlines \n
//     Any character might be redacted (except \n)
//     The redaction character is X
//     The redacted document is always the first one

function redacted(doc1, doc2) {    
  if(doc1.length !== doc2.length) return false;
  for(let i = 0; i < doc1.length; i++)
    if(doc1[i] !== doc2[i] && (doc1[i] === '\n' || doc2[i] === '\n' || doc1[i] !== 'X')) return false;
  return true;
}
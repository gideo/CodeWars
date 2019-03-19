// 6kyu - Replace Noun Phrases with Pronouns

// A Noun Phrase is a phrase that can be replaced by a pronoun [he/she/it].

// For example, in the sentence:

// a girl ate the cookie

// "A girl" is a Noun Phrase, so we can say "she ate the cookie." "The cookie" is also a Noun Phrase, so we can even say "she ate it."

// Both of these Noun Phrases are made up of an auxialliary (aux) [the/a] followed by a Noun (N) [girl/cookie].

// More complicated Noun Phrases can also include an arbitrary number of adjectives (adj). For example:

// a big tall scary girl ate the cookie

// where "big", "tall", and "scary" are all adjectives.

// For our simplified model, we will define a Noun Phrase as an auxiliary, followed by 0 or more adjectives, followed by a Noun.

// Write a function that takes a sentence (as a string of words separated by spaces), a list of pronouns, and a dictionary (maping words to the grammatical categories aux, adj, and N). Return the sentcnce with all Noun Phrases replaced by pronouns, in the order given.

// Assume:

// sentences will contain only lower-case letters and spaces (no puctuation)
// any words not inlcuded in the dictionary are not auxilliaries, adjectives, or nouns
// the number of pronouns provided will be equal to the number of Noun Phrases in the sentence

function replaceNounPhrases(sentence, pronouns, dictionary) {
  let arr = sentence.split(" "), aux = -1, pronoun = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!(arr[i] in dictionary)) {
      aux = -1;
    } else if (dictionary[arr[i]] === "aux") {
      aux = i;
    } else if (dictionary[arr[i]] === "N" && aux !== -1) {
      arr.splice(aux, i - aux + 1, pronouns[pronoun]);
      pronoun++;
      aux = -1;
      i = aux;
    }
  }
  return arr.join(" ");
}
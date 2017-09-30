// 7kyu - Most Common First

// Given a string, s, return a new string that orders the characters in order of 
// frequency.

// The returned string should have the same number of characters as the original 
// string.

// Make your transformation stable, meaning characters that compare equal should 
// stay in their original order in the string s.

// most_common("Hello world") => "lllooHe wrd"
// most_common("Hello He worldwrd") => "lllHeo He wordwrd"
// Explanation:

// In the hello world example, there are 3 'l'characters, 2 'o'characters, and one 
// each of 'H', 'e', ' ', 'w', 'r', and 'd'characters. Since 'He wrd'are all tied, 
// they occur in the same relative order that they do in the original string, 
// 'Hello world'.

// Note that ties don't just happen in the case of characters occuring once in a 
// string. See the second example, most_common("Hello He worldwrd")should return 
// 'lllHeo He wordwrd', not 'lllHHeeoo wwrrdd'. This is a key behavior if this 
// method were to be used to transform a string on multiple passes.

from collections import Counter

def most_common(s):
    count=Counter(s)
    return ''.join(sorted(s, key=lambda x: count[x], reverse=1))
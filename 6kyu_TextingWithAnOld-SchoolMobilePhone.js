// 6kyu - Texting with an old-school mobile phone

// If you're old enough, you might remember buying your first mobile phone, one of the old ones with no touchscreen, and sending your first text message with excitement in your eyes. Maybe you still have one lying in a drawer somewhere.

// Let's try to remember the good old days and what it was like to send text messages with such devices. A lot of them had different layouts, most notably for special characters and spaces, so for simplicity we'll be using a fictional model with 3x4 key layout shown below:

// -------------------------
// |   1   |   2   |   3   |  <-- hold a key to type a number
// |  .,?! |  abc  |  def  |  <-- press a key to type a letter
// -------------------------
// |   4   |   5   |   6   |
// |  ghi  |  jkl  |  mno  |
// -------------------------
// |   7   |   8   |   9   |
// |  pqrs |  tuv  |  wxyz |
// -------------------------
// |   *   |   0   |   #   |  <-- hold for *, 0 or #
// |  '-+= | space |  case |  <-- press # to switch between upper/lower case
// -------------------------
// Aside: generally, using * would bring up a list with other special characters, but to keep it simple we'll only use a few - '-+= - and not worry about the rest.

// The task
// You got your thumb ready to go, so you'll receive a message and your job is to figure out which keys you need to press to write the message with the lowest number of clicks possible. Return the result as a string of key inputs.

// Carefully study the rules, special cases and examples provided below.

// How it works
// Inputs that should be put in the resulting string are shown at the top row of a key layout.
// To type numbers 0-9 and special characters *# - hold that key. Holding is respresented by a number, followed by a dash (type 5- to output number 5).
// To type letters, press a button repeatedly to cycle through the possible characters that are provided in the bottom row of a key layout. Pressing is represented by key number repeated n times, where n is the position of character on that particular key (type 5 for letter j, 9999 for z, 111 for ?, ** for -).
// To toggle between lowercase and uppercase letters, use the # symbol. At the start of the message, default case is lowercase. You should switch case only when the next character has different case. Note that non-alphabet characters are not case sensitive and should be ignored when considering case-switching (#222 for letter C. Note that you'll have to use # again to switch back to lowercase later on. A-z should be handled as #2**#9999).
// If you have multiple letters in a row that sit on the same key, you have to wait before pressing the same key again. Waiting is represented by adding a space between 2 (or more) such letters (to type hihi, press 44 444 44 444). However, you shouldn't wait after switching case or after holding a key, even if next character in on the same key.
// Aside: typing 0 can be done either by holding it, or pressing it twice. However, the requirement is to have the least keypresses, so stick to holding keys to output characters on top row.

// Example
// To illustrate how this works, let's go over an example. Say you want to type this message - 'Def Con 1!':

// Switch to uppercase with # and press 3 (#3 = D)
// Switch to lowercase and press 3 twice (#33 = e). Note that even though those 2 letters are on the same key, you have to switch case between them, so you don't have to wait.
// Next letter is on number 3 again, and is also lowercase, so you have to wait to type again (' 333' = f).
// In a similar manner type the second word (space is located on number 0).
// Finish off by holding 1 as 1- and typing ! as 1111 ('1-1111' = 1!). Note that after holding a key you don't need to wait to press another key.
// Result: sendMessage("Def Con 1!") => "#3#33 3330#222#666 6601-1111"
// More examples are provided in sample test suite.

// All inputs will be valid strings and only consist of characters from the key layout table.

// Good luck!
// Also check out other cool katas that inspired this one:

// https://www.codewars.com/kata/multi-tap-keypad-text-entry-on-an-old-mobile-phone
// https://www.codewars.com/kata/mobile-display-keystrokes
// https://www.codewars.com/kata/thinking-and-testing-mobile-phone-simulator

const d = {
  '.': '1',
  ',': '11',
  '?': '111',
  '!': '1111',
  'a': '2',
  'b': '22',
  'c': '222',
  'd': '3',
  'e': '33',
  'f': '333',
  'g': '4',
  'h': '44',
  'i': '444',
  'j': '5',
  'k': '55',
  'l': '555',
  'm': '6',
  'n': '66',
  'o': '666',
  'p': '7',
  'q': '77',
  'r': '777',
  's': '7777',
  't': '8',
  'u': '88',
  'v': '888',
  'w': '9',
  'x': '99',
  'y': '999',
  'z': '9999',
  '\'': '*',
  '-': '**',
  '+': '***',
  '=': '****',
  ' ': '0',
  '1': '1-',
  '2': '2-',
  '3': '3-',
  '4': '4-',
  '5': '5-',
  '6': '6-',
  '7': '7-',
  '8': '8-',
  '9': '9-',
  '0': '0-',
  '*': '*-',
  '#': '#-',
};

const sendMessage = (m, caps = false) => m.split('').reduce((a, b) => {
  if (/[a-z]/.test(b) && caps || /[A-Z]/.test(b) && !caps) {
    a += '#';
    caps = !caps;
  }
  if (caps) b = b.toLowerCase();
  
  return a + (a[a.length - 1] === d[b][0] ? ' ' : '') + d[b];
}, '');
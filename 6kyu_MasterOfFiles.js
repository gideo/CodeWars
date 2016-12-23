// 6 kyu - Master of Files

// Are you a file extension master? Let's find out by checking if Bill's files are images or audio 
// files. Please use regex if available natively for your language.

// You will create 2 string methods:

// isAudio/is_audio, matching 1 or + uppercase/lowercase letter(s) (combination possible), 
// with the extension .mp3, .flac, .alac, or .aac.
// isImage/is_image, matching 1 or + uppercase/lowercase letter(s) (combination possible), 
// with the extension .jpg, .jpeg, .png, .bmp, or .gif.

// Rules

// It should return true or false, simply.
// File extensions should consist of lowercase letters and numbers only.
// File names should consist of letters only (uppercase, lowercase, or both)
// Good luck!


String.prototype.isAudio = function() {
  return /^[a-zA-Z]+\.(mp3|flac|alac|aac)$/.test(this);
}

String.prototype.isImage = function() {
  return /^[a-zA-Z]+\.(jpg|jpeg|png|bmp|gif)$/.test(this);
}
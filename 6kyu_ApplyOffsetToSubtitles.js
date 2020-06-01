// 6kyu - Apply Offset to Subtitles 

// You are given a line from a movie subtitle file as a string.
// The line consists of time interval when the text is shown:

// start(hh:mm:ss,ms) --> stop(hh:mm:ss,ms)

// and the text itself, for example:

// 01:09:02,684 --> 01:09:03,601 Run Forrest, run!

// Your task is to write a function subs_offset_apply which takes such string and offset
// (integer) in miliseconds as arguments, and returns the string with the offset applied.
// Examples:

// string = "01:09:02,684 --> 01:09:03,601 Run Forrest, run!"  
// subs_offset_apply(string, 3663655)
// output: "02:10:06,339 --> 02:10:07,256 Run Forrest, run!"

// "00:43:22,074 --> 00:43:24,159 I am your father, Luke."
// subs_offset_apply(string, 1789)   
// output: "00:43:23,863 --> 00:43:25,948 I am your father, Luke." 

// "00:03:06,241 --> 00:03:07,618 I'll be back."
// subs_offset_apply(string, -21789) 
// output: "00:02:44,452 --> 00:02:45,829 I'll be back."
// Time constraints:

// 00:00:00,000 <= t <= 99:59:59,999

// In case of too big negative or positive offset, which results in exceeding the constraints,
// the function should return a string "Invalid offset".
// You'll be given only valid strings.
// Have Fun!

function subsOffsetApply(str, offset) {
  let pad = (n, d) => ('0'.repeat(d - 1) + (n | 0)).slice(-d);
  let toMs = (s) =>
    ((+s.slice(0, 2) * 60 + +s.slice(3, 5)) * 60 + +s.slice(6, 8)) * 1e3 + +s.slice(9, 12);
  let toStr = (m) =>
    `${pad(m / 36e5, 2)}:${pad(m / 6e4 % 60, 2)}:${pad(m / 1e3 % 60, 2)},${pad(m % 1e3, 3)}`;
  let start = toMs(str) + offset, end = toMs(str.slice(17)) + offset;
  return start < 0 || end > 359999999 ?
    'Invalid offset' : `${toStr(start)} --> ${toStr(end)}${str.slice(29)}`;
}
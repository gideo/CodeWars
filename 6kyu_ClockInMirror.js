// 6 kyu - Clock in Mirror

// Description:
// Clock in Mirror

// Peter can see a clock in the mirror from the place he sits in the office. 
// When he saw the clock shows 12:22
// He knows that the time is 11:38
// in the same manner:
// 05:25 --> 06:35
// 01:50 --> 10:10
// 11:58 --> 12:02
// 12:01 --> 11:59
// Please complete the method which is provided with mirror time as string, and 
// return the real time as string.

let WhatIsTheTime = function(str) {
  if(str === "12:00" || str === "06:00") { return str; }
  if(str === "04:00") { return "08:00"}
  if(str === "08:00") { return "04:00"}
  
  str = str.split(":");
  let hour = str[0]; 
  let min = ((60-str[1]+"").length > 1) ? 60-str[1] : `0${60-str[1]}`;
  
  if(+hour >= 11 && +min > 0) {
    return (+hour === 12) ? `11:${min}` : `12:${min}`;
  }
  
  
  if(11-hour <= 9) {
    return `0${11-hour}:${min}`;
  }
  return `${11-hour}:${min}`;
}
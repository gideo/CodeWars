// 7kyu - It is Written in the Stars 

// Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
// Task:
// Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
// Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

// Aquarius ------ 21 January - 19 February
// Pisces --------- 20 February - 20 March
// Aries ---------- 21 March - 20 April
// Taurus -------- 21 April - 21 May
// Gemini -------- 22 May - 21 June
// Cancer -------- 22 June - 22 July
// Leo ------------- 23 July - 23 August
// Virgo ----------- 24 August - 23 September
// Libra ----------- 24 September - 23 October
// Scorpio -------- 24 October - 22 November
// Sagittarius ---- 23 November - 21 December
// Capricorn ----- 22 December - 20 January

// Test info: 100 random tests (dates range from January 1st 1940 until now)

function starSign(date) {
  let day = date.getDate();
  switch(date.getMonth()){
    case 0:  return day < 21 ? "Capricorn" : "Aquarius";
    case 1:  return day < 20 ? "Aquarius" : "Pisces";
    case 2:  return day < 21 ? "Pisces" : "Aries";
    case 3:  return day < 21 ? "Aries" : "Taurus";
    case 4:  return day < 22 ? "Taurus" : "Gemini";
    case 5:  return day < 22 ? "Gemini" : "Cancer";
    case 6:  return day < 23 ? "Cancer" : "Leo";
    case 7:  return day < 24 ? "Leo" : "Virgo";
    case 8:  return day < 24 ? "Virgo" : "Libra";
    case 9:  return day < 24 ? "Libra" : "Scorpio";
    case 10: return day < 23 ? "Scorpio" : "Sagittarius";
    case 11: return day < 22 ? "Sagittarius" : "Capricorn";           
  }
}
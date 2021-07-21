// 5kyu - Alphabet War Wo Lo Loooooo Priests Join the War

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1
//  t - 0 (but it's priest with Wo lo loooooooo power)
// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1
//  j - 0 (but it's priest with Wo lo loooooooo power)
// The other letters don't have power and are only victims.
// The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.

// mtq => wtp
// wjs => mjz
// A letter with adjacent letters j and t is not converted i.e.:

// tmj => tmj
// jzt => jzt
// The priests (j and t) do not convert the other priests ( jt => jt ).

// Example
// alphabetWar("z")         //=>  "z"  => "Right side wins!"
// alphabetWar("tz")        //=>  "ts" => "Left side wins!" 
// alphabetWar("jz")        //=>  "jz" => "Right side wins!" 
// alphabetWar("zt")        //=>  "st" => "Left side wins!" 
// alphabetWar("azt")       //=> "ast" => "Left side wins!"
// alphabetWar("tzj")       //=> "tzj" => "Right side wins!" 
// Alphabet war Collection
// Alphabet war
// Alphabet war - airstrike - letters massacre
// Alphabet wars - reinforces massacre
// Alphabet wars - nuclear strike
// Alphabet war - Wo lo loooooo priests join the war

function alphabetWar(fight) {
  let obj = { 'left': ['t', 's', 'b', 'p', 'w'], 'right': ['j', 'z', 'd', 'q', 'm'], 'leftScore': 0, 'rightScore': 0};

  function checkForPriest(i, friendly, enemy) {
    let priest = obj[friendly][0], epriest = obj[enemy][0],
        previous = fight[i - 1], next = fight[i + 1],
        value = obj[friendly].includes(fight[i]) ? obj[friendly].indexOf(fight[i]) : 0;
    
    if (previous === priest || next === priest) { obj[`${friendly}Score`] += value }
    else if (previous === epriest || next === epriest) { obj[`${enemy}Score`] += value }
    else { obj[`${friendly}Score`] += value }
  }
  
  for (let i = 0; i < fight.length; i++) 
    obj.left.includes(fight[i]) ? checkForPriest(i, 'left', 'right') : checkForPriest(i, 'right', 'left');
  
  if (obj.leftScore > obj.rightScore) { return "Left side wins!"; }
  else if (obj.rightScore > obj.leftScore) return "Right side wins!";
  else return "Let's fight again!";
}


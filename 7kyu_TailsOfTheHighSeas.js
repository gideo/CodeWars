// 7kyu - Tails of the High Seas

// It is a little past midnight in your cool developer crib, and you have just received a shaky text from your most faithful client. Somewhere in your client's hushed emojis, you make out a plea for an emergency favor. Your client is adrift, stuck in the Caribbean on his "modestly-sized" yacht, and a swashbucklin' galleon full of monkeys trained by Keith Richards himself is fast approaching. Your client needs a function ASAP to calculate the likelihood of victory so that he/she may make an informed decision.

// keef_for_president

// Through the power of Tinder, your client will create two smoking object profiles that you can swipe right on and pass along to your function. These objects represent your client's ("modestly-sized," he could not emphasize that enough) yacht and the wild barrel of sea-faring monkeys -- they will look like the following:

// {hit_points: 20,
// orangutans: 5,
// chimpanzees: 3,
// gorillas: 4,
// jane_reporting_4_duty: false},

// {hit_points: 70,
// crew: 35}
// You also found a sticky note under your rear end with the following power levels:

// Orangutans: 5
// Chimpanzees: 3
// Gorillas: 9
// Humans: 1
// The dynamics of your function, bite_me_monkey, boil down to this:

// The highest numeric outcome of your functions' two competing sides determines the return string of bite_me_monkey
// If the final primate number is greater than or equal to your client's final number, then the primates win and the function should return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
// Otherwise, return "Everything's good, I'll see you in the office on Monday."
// A third function parameter, terrain, determines which side has an advantage in the fight:
// If the terrain bonus is "island," then the humans have 20 extra points on top of their fighting battle number.
// If the terrain bonus is "sea," then the primates have 10 extra points on top of their fighting battle number.
// The monkey object will contain a Boolean wildcard value, jane_reporting_4_duty, that confirms whether or not Jane Goodall is present. If so, then the primates' fighting battle value is multiplied by half of however many chimpanzees are present (this is applied after any terrain bonus).
// The two fighting battle numbers are calculated by:
// Multiplying power levels against the headcount of the appropriate species.
// Taking the aggregate of those products and adding it to the appropriate object's hit points value
// Godspeed! The fate of the free world does not depend on this. However, your client may never be able to maintain a healthy relationship with local zoos or enjoy James Franco's dimples ever again...

function biteMeMonkey (monkObj, clientObj, terrain) {
  let monkeyPower = (monkObj.orangutans*5)+(monkObj.chimpanzees*3)+(monkObj.gorillas*9)+monkObj.hitPoints,
      humanPower = clientObj.hitPoints+clientObj.crew;
  
  if(terrain == 'island') {humanPower += 20;}
  else if (terrain == 'sea') {monkeyPower+=10;}
  
  if(monkObj.janeReporting4Duty == true)
    monkeyPower *= (monkObj.chimpanzees/2);
  if(monkeyPower >= humanPower) 
    return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!";
  return "Everything's good, I'll see you in the office on Monday.";
}
// 6kyu - Socialist Distribution

// A core idea of several left-wing ideologies is that the wealthiest should support the poorest, no matter what and that is exactly what you are called to do using this kata (which, on a side note, was born out of the necessity to redistribute the width of divs into a given container).

// You will be given two parameters, population and minimum: your goal is to give to each one according to his own needs (which we assume to be equal to minimum for everyone, no matter what), taking from the richest (bigger numbers) first.

// For example, assuming a population [2,3,5,15,75] and 5 as a minimum, the expected result should be [5,5,5,15,70]. Let's punish those filthy capitalists, as we all know that being rich has to be somehow a fault and a shame!

// If you happen to have few people as the richest, just take from the ones with the lowest index (the closest to the left, in few words) in the array first, on a 1:1 based heroic proletarian redistribution, until everyone is satisfied.

// To clarify this rule, assuming a population [2,3,5,45,45] and 5 as minimum, the expected result should be [5,5,5,42,43].

// If you want to see it in steps, consider removing minimum from every member of the population, then iteratively (or recursively) adding 1 to the poorest while removing 1 from the richest. Pick the element most at left if more elements exist with the same level of minimal poverty, as they are certainly even more aligned with the party will than other poor people; similarly, it is ok to take from the richest one on the left first, so they can learn their lesson and be more kind, possibly giving more gifts to the inspectors of the State!

// In steps:

// [ 2, 3, 5,45,45] becomes
// [-3,-2, 0,40,40] that then becomes
// [-2,-2, 0,39,40] that then becomes
// [-1,-2, 0,39,39] that then becomes
// [-1,-1, 0,38,39] that then becomes
// [ 0,-1, 0,38,38] that then becomes
// [ 0, 0, 0,37,38] that then finally becomes (adding the minimum again, as no value is no longer under the poverty threshold
// [ 5, 5, 5,42,43]
// If giving minimum is unfeasable with the current resources (as it often comes to be the case in socialist communities...), for example if the above starting population had set a goal of giving anyone at least 30, just return an empty array [].

function socialistDistribution(population, minimum){
  while (Math.min(...population) < minimum && Math.max(...population) > minimum){
    let minInd = population.indexOf(Math.min(...population)),
      maxInd = population.indexOf(Math.max(...population));
      population[minInd]++;
      population[maxInd]--;
  }
  return Math.min(...population) < minimum ? [] : population;
}
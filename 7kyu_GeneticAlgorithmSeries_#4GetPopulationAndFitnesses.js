// 7kyu - Genetic Algorithm Series - #4 Get population and fitnesses

// In a genetic algorithm, a population is a collection of candidates that may evolve toward a better solution.

// We determine how close a chromosome is to a ideal solution by calculating its fitness. https://www.codewars.com/kata/567b468357ed7411be00004a/train You are given two parameters, the population containing all individuals and a function fitness that determines how close to the solution a chromosome is.

// Your task is to return a collection containing an object with the chromosome and the calculated fitness.

// [
//   { chromosome: c, fitness: f },
//   { chromosome: c, fitness: f },
//   ...
// ]
// See other katas from this series
// Genetic Algorithm Series - #1 Generate
// Genetic Algorithm Series - #2 Mutation
// Genetic Algorithm Series - #3 Crossover
// Genetic Algorithm Series - #4 Get population and fitnesses
// Genetic Algorithm Series - #5 Roulette wheel selection
// This kata is a piece of Binary Genetic Algorithm

const mapPopulationFit = (population, fitness) => {
  return population.map(chromosome => ({ chromosome, fitness: fitness(chromosome) }))
}
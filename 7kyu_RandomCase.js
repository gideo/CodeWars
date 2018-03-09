// 7kyu - Random Case

// Write a function that will randomly upper and lower characters in a string 
// - randomCase() (random_case() for Python).

// A few examples:

// randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == 
// "lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

// randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
// Note: this function will work within the basic ASCII character set to make this 
// kata easier - so no need to make the function multibyte safe.

function randomCase(x) {
  return x.split("").map(a=>(Math.random()>.5)?a.toLowerCase():a.toUpperCase()).join("");
}
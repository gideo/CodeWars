// 6kyu - Protein Synthesis: From DNA to Polypeptide

// Our cells go through a process called protein synthesis to translate the instructions in DNA into an amino acid chain, or polypeptide.

// Your job is to replicate this!

// Step 1: Transcription

// Your input will be a string of DNA that looks like this:

// "TACAGCTCGCTATGAATC"

// You then must transcribe it to mRNA. Each letter, or base, gets transcribed.

// A -> U
// G -> C
// C -> G```

// Also, you will split it into groups of three, or _codons_.

// The above example would become:

// `"AUG UCG AGC GAU ACU UAG"`

// ---

// **Step 2: Translation**

// After you have the mRNA strand, you will turn it into an amino acid chain.

// Each codon corresponds to an amino acid:
// Ala GCU, GCC, GCA, GCG Leu UUA, UUG, CUU, CUC, CUA, CUG Arg CGU, CGC, CGA, CGG, AGA, AGG Lys AAA, AAG Asn AAU, AAC Met AUG Asp GAU, GAC Phe UUU, UUC Cys UGU, UGC Pro CCU, CCC, CCA, CCG Gln CAA, CAG Ser UCU, UCC, UCA, UCG, AGU, AGC Glu GAA, GAG Thr ACU, ACC, ACA, ACG Gly GGU, GGC, GGA, GGG Trp UGG His CAU, CAC Tyr UAU, UAC Ile AUU, AUC, AUA Val GUU, GUC, GUA, GUG Stop UAG, UGA, UAA```

// Phew, that's a long list!

// The above example would become:

// "Met Ser Ser Thr Asp Stop"

// Any additional sets of bases that aren't in a group of three aren't included. For example:

// "AUG C"

// would become

// "Met"

// Anyway, your final output will be the mRNA sequence and the polypeptide.

// Here are some examples:

// In:

// "TACAGCTCGCTATGAATC"

// Out:

// ["AUG UCG AGC GAU ACU UAG","Met Ser Ser Asp Thr Stop"]

// In:

// "ACGTG"

// Out:

// ["UGC AC","Cys"]

function proteinSynthesis(dna) {
  let arr1 = {"T" : "A", "A" : "U", "G" : "C", "C" : "G" },
      arr2 = {"GCU, GCC, GCA, GCG" : "Ala", "UUA, UUG, CUU, CUC, CUA, CUG" : 
              "Leu", "CGU, CGC, CGA, CGG, AGA, AGG" : "Arg", "AAA, AAG" : "Lys", "AAU, AAC" : 
              "Asn", "AUG" : "Met", "GAU, GAC" : "Asp", "UUU, UUC" : "Phe", "UGU, UGC" : "Cys", 
              "CCU, CCC, CCA, CCG" : "Pro", "CAA, CAG" : "Gln", "UCU, UCC, UCA, UCG, AGU, AGC" : 
              "Ser", "GAA, GAG" : "Glu", "ACU, ACC, ACA, ACG" : "Thr", "GGU, GGC, GGA, GGG" : 
              "Gly", "UGG" : "Trp", "CAU, CAC" : "His", "UAU, UAC" : "Tyr", "AUU, AUC, AUA" : 
              "Ile", "GUU, GUC, GUA, GUG" : "Val", "UAG, UGA, UAA" : "Stop"},
      rna    = dna.replace(/\w/g, v => arr1[v]).match(/\w{1,3}/g).join(" "),
      amino  = (rna.match(/\w{3}/g)||[]).map(v => arr2[Object.keys(arr2).find(key => key.includes(v))]).join(" ");
  return [rna,amino];
}
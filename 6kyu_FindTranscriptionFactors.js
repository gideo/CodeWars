// 6 kyu Find Transcription Factors

// Description:

// The DNA is a long sequence of either cytosine (C), guanine (G), adenine (A), or thymine (T) 
// and their order is crucial for the transmission of genetic information. The reading of this 
// sequence doesn't always happen from the start to the end, but there are some regions that 
// need to be repeated. To do so, the organisms developed a system composed by “transcription 
// factors”. A transcription factor is a molecule that binds to specific DNA sequence (binding 
//   sites), thereby controlling the number of repetitions of that sequence.

// Given these group of transcription factors and relative binding sites:

// ATF6: "TGACGT"
// CREB: "TGACGCA"
// cMyc: "CACGTG"
// Gata1: "GATT"
// AhR: "TGCGTG"
// Write a function transFactors that takes the argument seq and returns the transcription factor
// (s) that bind and the binding position(s) in the sequence (starting from 1). The output should 
// be an object containing an array of the name(s) of the transcription factor(s) and an array 
// of the binding position(s).

// Please note that some transcription factors could have overlapping binding sites with others 
// (or with themselves).

// For example:

// seq = "ATGGCTGACGTCGTCATGGCGCCCCGATTGAACGATTCCTCCTCCT"
// returns: { ATF6: [ 6 ], Gata1: [ 26, 34 ] }
// In case the sequence is empty, too short, or doesn't contain a match, the function should 
// return and empty object {}.

function transFactors(seq) {
  let obj = { ATF6: "TGACGT", CREB: "TGACGCA", cMyc: "CACGTG", Gata1: "GATT", AhR: "TGCGTG"};
  let returns = {};
  for(let factor in obj) {
    for(let i = 0; i <= seq.length; i+=1){
      let idx = seq.indexOf(obj[factor], i) + 1;
      if(idx <= 0) break;
      else {
        (returns.hasOwnProperty(factor)) ? returns[factor].push(idx) : returns[factor] = [idx];
        i = idx;
      }
    }  
  }
  return returns;
}
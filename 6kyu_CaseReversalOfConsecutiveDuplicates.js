let reverseCase = function(word){
    return word.replace(RegExp(/(.)\1{1,}/, "g"), a => /[A-Z]/.test(a) ? a.toLowerCase() : a.toUpperCase());
}
function reverseWords(kata){
    var kataBaru = '';
    for(var i = kata.length-1; i>=0;i--){
      kataBaru += kata[i]
    }
  
    return kataBaru;
  }
// TEST CASES
console.log(reverseWords('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseWords('John Doe')); // eoD nhoJ
console.log(reverseWords('I am a bookworm')); // mrowkoob a ma I
console.log(reverseWords('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseWords('Super')); // repuS
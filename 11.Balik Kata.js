function reverseWords(words){{
    var newwords=""
    for (var i=words.length-1;i>=0;i-- ){
    newwords+=words[i]}
}
return newwords
}


// TEST CASES
console.log(reverseWords('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseWords('John Doe')); // eoD nhoJ
console.log(reverseWords('I am a bookworm')); // mrowkoob a ma I
console.log(reverseWords('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseWords('Super')); // repuS
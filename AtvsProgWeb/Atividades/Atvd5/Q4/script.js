var readline = require('readline-sync');

function caixaAlta(palavra) {
    
    caixA = palavra.toUpperCase(); // Padronizando a palavra como maiuscula.
    
    return caixA;
}

let palavra = readline.question("Digite uma palavra: ");

console.log(caixaAlta(palavra));
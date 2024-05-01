var readline = require('readline-sync');

function impaOrPar(numero) {
    
    // Comparando se o número é par ou impar.
    if (numero % 2 == 0) {
        
        return true;

    } else {
        
        return false;
    }
}

let numero = parseInt(readline.question("Digite um numero: "));
console.log(impaOrPar(numero));
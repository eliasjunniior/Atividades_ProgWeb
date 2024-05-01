var readline = require('readline-sync');

function decBin(numero) {
    let aux = "";
    let binario = "";

    while(numero > 0) {
        
        aux += numero % 2; // Retornando cada Bit do respectivo número.
        numero = Math.floor(numero / 2); // Forçando a divisão inteira.

    }

    // Colocando a representação binária em ordem.
    for (let i = aux.length -1 ; i >= 0; i--) {
        
        binario += aux[i];

    }

    return binario;
    
}


console.log(decBin(13));
console.log(decBin(44));
console.log(decBin(76));
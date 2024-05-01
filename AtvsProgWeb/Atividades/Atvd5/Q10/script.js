var readline = require('readline-sync');

function fatorial(numero) {
    if (numero === 0){

        return 1;

    } else {

        return numero * fatorial(numero - 1); // Usando recursão para calcular o fatorial enquanto o número não é 0.

    }
}

let numero = parseInt(readline.question("Digite um numero para calcular o fatorial: "));
console.log(fatorial(numero));
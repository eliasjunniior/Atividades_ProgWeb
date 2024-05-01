var readline = require('readline-sync');

function verificarPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return "Nao e um numero primo";
    }
    return numero > 1 ? "E um numero primo" : "Nao e um numero primo";
}

// Testando a função
let numero = readline.question('Digite um numero: ');
console.log(verificarPrimo(numero));
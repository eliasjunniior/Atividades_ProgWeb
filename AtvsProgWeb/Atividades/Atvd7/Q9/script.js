var readline = require('readline-sync');

function divisoresNaoPrimo(numero) {
    let divisores = [];
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) divisores.push(i);
    }
    return divisores.length > 0 ? divisores : 'Número primo';
}

function verificarPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) return divisoresNaoPrimo(numero);
    }
    return numero > 1 ? "E um numero primo" : divisoresNaoPrimo(numero);
}

// Testando a função
let numero = readline.question('Digite um numero: ');
console.log(verificarPrimo(numero));
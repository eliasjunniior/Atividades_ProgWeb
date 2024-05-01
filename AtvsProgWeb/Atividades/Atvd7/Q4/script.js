var readline = require('readline-sync');

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }


// Definindo um numero qualquer
let numero = readline.question('Digite um numero: ');

// Chamando a função para calcular o fatorial
console.log(calcularFatorial(numero));
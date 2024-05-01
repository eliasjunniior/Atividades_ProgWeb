var readline = require('readline-sync');

function calcularFatorialLimitado(numero) {
    if (numero < 0 || numero > 15) return 'Número inválido';
    return calcularFatorial(numero);
}

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
}

let numero = readline.question('Digite um numero: ');

// Chamando a função para calcular o fatorial
console.log(calcularFatorialLimitado(numero));
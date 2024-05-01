var readline = require('readline-sync');

let limitemin;
let limitemax;
let soma = 0;

limitemin = parseInt(readline.question('Digite um numero para ser o limite minimo: '));
limitemax = parseInt(readline.question('Digite um numero para ser o limite maximo: '));

for(count = limitemin + 1; count < limitemax ; count++) {
    console.log(count);
    soma += count;
}

console.log(`A soma total é ${soma}`);
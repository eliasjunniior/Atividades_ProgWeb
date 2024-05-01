var readline = require('readline-sync');

let limitemin;
let limitemax;

limitemin = parseInt(readline.question('Digite um numero para ser o limite minimo: '));
limitemax = parseInt(readline.question('Digite um numero para ser o limite maximo: '));

for(count = limitemin + 1; count < limitemax ; count++) {
    console.log(count);
}
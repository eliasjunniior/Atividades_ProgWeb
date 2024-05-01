var readline = require('readline-sync');

function somatorio(numero) {
    numero == 1 ? numero + 1 : somatorio(numero - 1);
    
    
}

let numero = readline.question('Digite um numero inteiro qualquer: ');
console.log(somatorio(numero))

var readline = require('readline-sync');

let nota = 0;

do {
    nota = Number(readline.question('Digite uma nota válida de 0 a 10: '));
    
    nota <= 0 ? console.log(`Essa nota ${nota} nao e valida`) :
    console.log('Parabéns!');
    
} while(nota <= 0);
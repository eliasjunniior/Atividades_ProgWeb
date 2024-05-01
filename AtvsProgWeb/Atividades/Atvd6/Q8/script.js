var readline = require('readline-sync');

let numeros = [];
let soma = 0;


for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(readline.question(`Digite o ${i + 1} numero: `));
    soma += numeros[i];
}

console.log(`A soma dos numeros e ${soma} e a media e ${soma / numeros.length}`);
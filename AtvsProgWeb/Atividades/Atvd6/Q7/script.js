var readline = require('readline-sync');

let numeros = [];
let max = 0;


for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(readline.question(`Digite o ${i + 1} numero: `));
}

for (let item in numeros) {
    numeros[item] > max ? max = numeros[item] : max;
}

console.log(`O maior numero e ${max}`);
var readline = require('readline-sync');

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 16, 17, 18, 19, 20];

for (let item in numeros) {
    console.log(numeros[item]);
}

let numeros2 = "";

for (let item in numeros) {
    numeros2 += " " + numeros[item];
}
// Removendo o espaço da frente
numeros2 = numeros2.slice(1, numeros2.length)
console.log(numeros2);

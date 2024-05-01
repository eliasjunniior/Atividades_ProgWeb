var readline = require('readline-sync');

function contarParesImpares(numeros) {
    let pares = 0, impares = 0;
    numeros.forEach(numero => {
      numero % 2 === 0 ? pares++ : impares++;
    });
    return { pares, impares };
  }

let numeros = [];

// Recebendo os 10 numeros
for (let init = 0; init < 10; init++) {
    numeros[init] = readline.question(`Digite o ${init + 1} numero: `);
}

quantidades  = contarParesImpares(numeros);

console.log(`Numeros pares: ${quantidades.pares} Numeros impares: ${quantidades.impares}`);
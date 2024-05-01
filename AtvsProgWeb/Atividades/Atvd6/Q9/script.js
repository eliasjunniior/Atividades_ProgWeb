let numeros = [];

// Preenchendo o array / lista com números de 1 a 50.
for (let num = 1; num <= 50; num++) {
    numeros[num - 1] = num;
}

// Imprimindo os números impares.
for (item in numeros) {
    numeros[item] % 2 != 0 ? console.log(numeros[item]) : numeros[item];
}
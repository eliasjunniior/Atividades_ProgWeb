var readline = require('readline-sync');

function pell(n) {
    return n === 0 ? 0 : n === 1 ? 1 : 2 * pell(n - 1) + pell(n - 2)
}

function imprimirPell(n) {
    let sequencia = "";
    for (let i = 0; i < n; i++){
        i === n - 1 ? sequencia += pell(i) : sequencia += pell(i) + ", "
    }

    return sequencia
}

let numero = Number(readline.question('Digite um numero qualquer inteiro: '));

console.log(imprimirPell(numero))
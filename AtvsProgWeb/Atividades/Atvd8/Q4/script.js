var readline = require('readline-sync');


function tribonacci(n) {
    return n === 0 ||  n === 1 ? 0 : n === 2 ? 1 : tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
}


function imprimirTribonacci(n) {
    let sequencia = "";
    for (let i = 0; i < n; i++){
        i === n - 1 ? sequencia += tribonacci(i) : sequencia += tribonacci(i) + ", "
    }

    return sequencia
}

let numero = Number(readline.question('Digite um numero inteiro: '));

console.log(imprimirTribonacci(numero))
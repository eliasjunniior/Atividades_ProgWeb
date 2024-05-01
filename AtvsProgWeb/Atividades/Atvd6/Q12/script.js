var readline = require('readline-sync');

function tabuada(valor) {
    for (let i = 0; i < 10; i++) {

        console.log(`${valor} x ${i + 1} = ${valor * (i + 1)}`)

    }
}

let valor = Number(readline.question('Digite um numero para ver sua tabuada: '));
tabuada(valor);
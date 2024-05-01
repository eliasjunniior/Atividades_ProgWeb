var readline = require('readline-sync');

function porcentagem(valorinicial, percentual) {

    let acrescimo = valorinicial * (percentual / 100); // Calculando o valor do acrescimo.
    let valorTotal = valorinicial + acrescimo; // Somando o valor inicial com o acrescimo.

    return valorTotal;

}

let valorinicial = parseInt(readline.question("Digite o valor a ser acrescido: "));
let percentual = parseInt(readline.question("Digite o valor da porcentagem, Ex. 10 -> 10% : "));

console.log(porcentagem(valorinicial, percentual));

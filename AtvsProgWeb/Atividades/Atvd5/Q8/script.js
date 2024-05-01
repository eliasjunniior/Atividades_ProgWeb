var readline = require('readline-sync');

function palavraPalidromo(palavra) {

    palavra = palavra.toLowerCase(); // Padronizando a palavra como minusculas.

    let palavraReverse = "";

    for (let i = palavra.length - 1; i >= 0; i--) {

        palavraReverse += palavra[i]; // Invertendo cada caracter da palavra.

    }

    if (palavra === palavraReverse) {

        return true;

    } else {

        return false;
    }
}

let palavra = readline.question("Digite uma palavra: ");

console.log(palavraPalidromo(palavra));

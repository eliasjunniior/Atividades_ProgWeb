var readline = require('readline-sync');

function multiplicacao(x , k) {

    return k == 1 ? x : x *= multiplicacao(x, k - 1)
    
}


let x = Number(readline.question('Digite um valor inteiro de X qualquer: ')); 
let k = Number(readline.question('Digite um numero inteiro de K qualquer: ')); 

console.log(multiplicacao(x, k))
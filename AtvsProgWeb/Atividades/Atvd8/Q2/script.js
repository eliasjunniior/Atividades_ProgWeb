var readline = require('readline-sync');

function fracionario(numero) {

    return numero === 1 ? 1 : 1 / numero + fracionario(numero - 1) 

}

let numero = Number(readline.question('Digite um numero inteiro qualquer: ')); 
console.log(fracionario(numero))
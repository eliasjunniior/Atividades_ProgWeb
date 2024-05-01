var readline = require('readline-sync');

let nascimento = readline.question("Digite o ano do seu nascimento: ");

idade = 2024 - nascimento;

console.log(idade);

if (idade >= 18){
    console.log("Voce e maior de idade.");
} else {
    console.log("Voce e menor de idade.");
}
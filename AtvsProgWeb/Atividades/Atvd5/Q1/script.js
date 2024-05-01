var readline = require('readline-sync');


function boasVindas(nome) {
    console.log(`Bem-Vindo, ${nome}!`); // Usando o nome do usuário para mostrar a mensagem de boas vindas com o seu nome.
}

let nome = readline.question("Digite seu nome: ");

boasVindas(nome);
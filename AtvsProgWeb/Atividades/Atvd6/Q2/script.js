var readline = require('readline-sync');

let nome, senha;

nome = readline.question('Digite seu nome de usuario: ');

do {
  
   senha = readline.question('Digite uma senha que nao seja igual seu nome: ');
   senha === nome ? console.log(`A senha "${senha}" é igual ao seu nome`) :
   console.log('Login salvo com sucesso');

} while(senha === nome);
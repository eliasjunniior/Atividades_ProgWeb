 var readline = require('readline-sync');
 let num = 0;
 console.log("Pensando em um número de 1 até 100...");

 let num_secreto = Math.floor(Math.random() * 101);

 console.log(num_secreto);

 while (num != num_secreto){
     num = readline.question("Tente adivinhar o numero:");
     if (num < num_secreto) {
         console.log("Seu palpite é menor que o numero secreto.");

     } else if (num > num_secreto) {
         console.log("Seu palpite é maior que o numero secreto.");

     } else {
         console.log("Você acertou !!");
     }

 }

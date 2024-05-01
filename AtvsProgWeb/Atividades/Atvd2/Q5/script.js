var readline = require('readline-sync');

let valor = readline.question("Digite o valor que deseja sacar: ");

if (valor % 10 == 0){
    console.log("Saque realizado com sucesso.");
} else {
    console.log("Valor invalido, digite um valor multiplo de 10");
}
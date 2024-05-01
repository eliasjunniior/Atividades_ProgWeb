var readline = require('readline-sync');

let peso = readline.question("Digite seu peso: ");
let altura = readline.question("Digite sua altura: ");

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso.")
} else if (imc <= 24.9){
    console.log("Peso normal.")
} else if (imc <= 29.9) {
    console.log("Excesso de peso.")
} else if (imc <= 34.9) {
    console.log("Obesidade grau I.")
} else if (imc <= 39.9) {
    console.log("Obesidade grau II.")
} else {
    console.log("Obesidade grau III.")
}
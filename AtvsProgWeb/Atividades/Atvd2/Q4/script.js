var readline = require('readline-sync');

let lado1, lado2, lado3;


lado1 = Number(readline.question("Digite o lado 1 do triangulo:"));
lado2 = Number(readline.question("Digite o lado 2 do triangulo:"));
lado3 = Number(readline.question("Digite o lado 3 do triangulo:"));

console.log(lado1+lado2)

if (lado1 + lado2 > lado3){
    if ((lado1 == lado2 && lado1 == lado3) ||
        (lado2 == lado1 && lado2 == lado3) ||
        (lado3 == lado1 && lado3 == lado2)) {

            console.log("Triangulo equilatero");

        } else if ((lado1 == lado2 && lado1 != lado3) ||
                   (lado2 == lado1 && lado2 != lado3) ||
                   (lado3 == lado1 && lado3 != lado2)) {

                    console.log("Triangulo isosceles");

                   } else {

                    console.log("Triangulo escaleno");
        }
        
    
} else {
    console.log("O triangulo nao e valido.");
}
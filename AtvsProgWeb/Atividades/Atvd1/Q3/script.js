// Questão 3
var num1, num2, num3 = 0;

// Uma função para "ler" os números.
function lerdados() {
    return Number(prompt("Digite o número: "));
}

// Definindo o valor de cada no múmero em suas variáveis.
num1 = lerdados();
num2 = lerdados();
num3 = lerdados();

console.log(num1);
console.log(num2);
console.log(num3);

// Utilizando o HTML.

document.write("<h3>" + num1 + "</h3>");
document.write("<h3>" + num2 + "</h3>");
document.write("<h3>" + num3 + "</h3>");
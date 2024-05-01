// Questão 2
var num_2 = []; // Eu usei uma lista que eu já conhecia de outras linguagens.
var soma = 0;

// Usei um for para ler os dados de entrada.
for (var j = 0; j < 3; j++){
  num_2[j] = Number(prompt("Digite os números: "));

}

// Usei outro for para somar todos os números.
for (var j = 0; j < 3; j++){
    soma = soma + num_2[j];
}

var media = soma / num_2.length; // Calculei a média.

// Exibindo utilizando HTML
document.write("<h2>" + "<br>" + "A média é: " + media + "</h2>");

// Exibindo sem o HTML

console.log(`A média é ${media}`);
//Questão 1 - Utilizando o HTML
var num = [];  // Eu usei uma lista que eu já conhecia de outras linguagens.

for (var i = 0; i < 3; i++) {
  num[i] = Number(prompt("Digite os números: "));

}

for (var i = 0; i < num.length; i++){
    document.write("<h2>"+ `Número: ${num[i]}` + "<br>" +  "</h2>");
}

//Questão 1 - Sem utilizar o HTML 

for (var j = 0; j < num.length; j++) {
    console.log(`Número: ${num[j]}`);
}

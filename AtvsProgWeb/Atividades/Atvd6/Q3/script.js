var readline = require('readline-sync');

// Função que verifica e atribui o valor a cada opção desejada.
function atribuirValor(variavel) {
    
    // Definindo dois arrays / listas para melhor comparar as opções.
    sx = ['f', 'm'];
    civil = ['s', 'c', 'v', 'd'];

    aux = readline.question(`${variavel}: `);

    if (variavel == 'Nome'){
        
        return aux.length > 3 ? aux : console.log('Nome invalido') + atribuirValor(variavel);

    } else if (variavel == 'Idade') {
        
        return aux > 0 && aux < 150 ? aux : console.log('Idade invalida') + atribuirValor(variavel);

    } else if (variavel == 'Salario') {
        
        return aux > 0 ? aux : console.log('Salario invalido') + atribuirValor(variavel);

    } else if (variavel == 'Sexo') {
        
        return sx.includes(aux.toLowerCase()) ? aux : console.log('Sexo invalido') + atribuirValor(variavel);
    
    } else if (variavel == 'Estado Civil') {
        
        return civil.includes(aux.toLowerCase()) ? aux : console.log('Estado civil invalido') + atribuirValor(variavel);
    }
}

// Definindo algumas variáveis necessárias.
let nome, idade, salario, sexo, estcivil

nome = atribuirValor('Nome');
idade = atribuirValor('Idade');
sexo = atribuirValor('Sexo');
salario = atribuirValor('Salario');
estcivil = atribuirValor('Estado Civil');

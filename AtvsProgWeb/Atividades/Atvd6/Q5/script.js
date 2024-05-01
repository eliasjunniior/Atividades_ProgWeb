var readline = require('readline-sync');
let paisA, paisB, taxaA, taxaB;
let opcao = true;

function calcularAnos() {

    let count = 1;

    while (paisA <= paisB) {
    
        paisA = paisA * (taxaA / 100) + paisA;
        paisB = paisB * (taxaB / 100) + paisB;

        paisA >= paisB ? console.log(`Pais A: ${paisA} Pais B: ${paisB}`) +
        console.log(`Pais A levara ${count} anos para igualar ou ultrapassar o pais B`) :
        console.log(`Pais A: ${paisA} Pais B: ${paisB}`);
        
        count++;
    }

}

do {

    paisA = parseFloat(readline.question('Digite o numero populacional do pais A: '));
    taxaA = parseFloat(readline.question('Digite a taxa de crescimento do pais A Ex. 1 -> 1% , 2 -> 2%: '));

    paisB = parseFloat(readline.question('Digite o numero populacional do pais B: '));
    taxaB = parseFloat(readline.question('Digite a taxa de crescimento do pais B Ex. 1 -> 1% , 2 -> 2%: '));

    calcularAnos();

    opcao = readline.question('Deseja continuar usando? sim / nao: ');
    opcao == 'nao' ? opcao = false : opcao;

} while (opcao);







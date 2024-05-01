var readline = require('readline-sync');
let parar = false;
let opcoes = ["Verificar Saldo", "Realizar saque", "Realizar deposito", "Realizar Transferencia",
              "Verificar Cheque Especial", "Atualizar Cadastro", "Verificar Limite de Credito"];
let opcao = 0;

// Todas as funções utilizada para o sistema bancário.
function verificarSaldo(saldo){ // Verifica o saldo da conta.

    if(saldo > 0){

        console.log("Saldo positivo");

    } else {

        console.log("Saldo negativo");
    }
}

function realizarSaque(saldoAtual, valorSaque){ // Simula a operação de saque.

    if(valorSaque <= saldoAtual){

        console.log(`Seu saque foi realizado com sucesso. Saldo atual: R$${saldoAtual}`);

    } else {

        console.log("Saldo insuficiente");
    }
}

function realizarDeposito(saldoAtual, valorDeposito){ // Simula a operação de depósito.

    if (valorDeposito > 0){

        saldoAtual += valorDeposito;
        console.log(`Deposito realizado com sucesso. Saldo atual R$${saldoAtual}`);

    } else {

        console.log("Insira um valor de deposito maior que 0.");
    }
}
// Simula a operação de transferência.
function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia){

    if (valorTransferencia <= saldoOrigem && valorTransferencia < limiteTransferencia){
        
        saldoOrigem -= valorTransferencia;
        saldoDestino += valorTransferencia;

        console.log(`Transferencia realizada com sucesso. Novo saldo de destino R$${saldoDestino}`);

    } else if (valorTransferencia > saldoOrigem) {

        console.log("Saldo insuficiente.");

    } else {

        console.log("Você ultrapassou o limite de transferencia.");

    }
}

function checarChequeEspecial(saldo){ // Simula a operação de verificar cheque especial.

    if (saldo < 0){

        console.log("Dentro do limite do cheque especial.");

    } else {

        console.log("Fora do limite do cheque especial.");
    }
}

function atualizarCadastro(cadastroAtivo, saldo){ // Simula a operação de atualização de cadastro.

    if (cadastroAtivo == true && saldo > 0){

        console.log("Cadastro ativo e saldo positivo.");

    } else if (cadastroAtivo == true && saldo < 0){

        console.log("Cadastro ativo mas precisa regularizar saldo.");

    } else if (cadastroAtivo == false){

        console.log("Por favorm atualize seu cadastro.");
    }
}

function avaliarCredito(saldo, historicoCredito, rendaMensal){ // Simula a operação de avaliação de crédito.

    if (saldo > 1000 && historicoCredito == true && rendaMensal > 3000){

        console.log("Credito aprovado.");

    } else {

        console.log("Credito negado.")
    }
}

function sistemaBancario(opcao) {
    if (opcao == 1) {

        console.log("\tVerificar Saldo");
        console.log("-".repeat(30));
        
        let saldo = Number(readline.question("Digite o seu saldo: "));
        
        console.log(verificarSaldo(saldo));

    } else if (opcao == 2) {

        console.log("\tRealizar saque")
        console.log("-".repeat(30));
        
        let saldoAtual = Number(readline.question("Digite seu saldo atual: "));
        let valorSaque = Number(readline.question("Digite o valor do seu saque: "));
        
        console.log(realizarSaque(saldoAtual, valorSaque));

    } else if (opcao == 3) {

        console.log("\tRealizar deposito");
        console.log("-".repeat(30));

        let saldoAtual = Number(readline.question("Digite seu saldo atual: "));
        let valorDeposito = Number(readline.question("Digite o valor do seu deposito: "));

        console.log(realizarDeposito(saldoAtual, valorDeposito));

    } else if (opcao == 4) {

        console.log("\tRealizar Transferencia");
        console.log("-".repeat(30));

        let saldoOrigem = Number(readline.question("Digite o saldo de sua conta: "));
        let saldoDestino = Number(readline.question("Digite o saldo da conta de destino: "));
        let valorTransferencia = Number(readline.question("Digite o valor da transferencia: "));
        let limiteTransferencia = Number(readline.question("Digite o limite de valor de tranferencia: "));

        console.log(realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia));

    } else if (opcao == 5) {

        console.log("\tVerificar Cheque Especial");
        console.log("-".repeat(30));

        let saldo = Number(readline.question("Digite o seu saldo: "));

        console.log(checarChequeEspecial(saldo));

    } else if (opcao == 6) {

        console.log("\tAtualizar Cadastro");
        console.log("-".repeat(30));

        let cadastroAtivo = readline.question("Seu cadastro esta ativo? sim / nao: ").toLowerCase();
        let saldo = Number(readline.question("Digite seu saldo: "));

        if (cadastroAtivo == "sim") {

            cadastroAtivo = true;

        } else {

            cadastroAtivo = false;
        }

        console.log(atualizarCadastro(cadastroAtivo, saldo));

    } else if (opcao == 7) {

        console.log("\tVerificar Limite de Credito");
        console.log("-".repeat(30));

        let saldo = Number(readline.question("Digite o seu saldo: "));
        let historicoCredito = readline.question("Seu historico de credito e bom / ruim: ").toLowerCase();
        let rendaMensal = Number(readline.question("Digite o valor de sua renda mensal: "));

        if (historicoCredito == "bom"){

            historicoCredito = true;

        } else {

            historicoCredito= false;
        }

        console.log(avaliarCredito(saldo, historicoCredito, rendaMensal));
   
    } else {
        parar = true;
    }
}


while (parar != true) {

    console.log("-".repeat(48));
    console.log("\tSISTEMA BANCARIO 3 MEU, 1 TEU");
    console.log("-".repeat(48));
    console.log("\nEscolha uma das opcoes:\n");

    for ( let opc in opcoes){

        console.log(`${Number(opc) + 1} - ${opcoes[opc]}`);

    }

    opcao = Number(readline.question("\nEscolha o numero da operacao desejada:"));

    sistemaBancario(opcao);

 }


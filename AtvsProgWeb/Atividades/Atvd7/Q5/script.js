
function analisarNumeros(numeros) {
    let menor = numeros[0], maior = numeros[0], soma = 0;
    numeros.forEach(numero => {
      if (numero < menor) menor = numero;
      if (numero > maior) maior = numero;
      soma += numero;
    });
    return { menor, maior, soma };
}

let numeros = [1, 3, 4, 6];

// Testando alguns conjuntos de números
retorno = analisarNumeros(numeros);
console.log(`Menor: ${retorno.menor}, maior: ${retorno.maior}, soma: ${retorno.soma}`);

retorno1 = analisarNumeros([3, 4, 6, 7, 8]);
console.log(`Menor: ${retorno1.menor}, maior: ${retorno1.maior}, soma: ${retorno1.soma}`);

retorno2 = analisarNumeros([6, 8, 9, 5]);
console.log(`Menor: ${retorno2.menor}, maior: ${retorno2.maior}, soma: ${retorno2.soma}`);
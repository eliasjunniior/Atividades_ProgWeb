function calcularMedia(notas) {
    let soma = notas.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma / notas.length;
}


// Teste 1
notas = [10, 45, 67, 80];
console.log(`Media: ${calcularMedia(notas)}`);

// Teste 2
notas = [50, 20, 12, 78];
console.log(`Media: ${calcularMedia(notas)}`);
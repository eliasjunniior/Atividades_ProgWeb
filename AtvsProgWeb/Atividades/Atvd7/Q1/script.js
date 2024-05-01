function calcularPotencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
      resultado *= base;
    }
    return resultado;
  }


// Testando exemplos
console.log(calcularPotencia(4, 1));
console.log(calcularPotencia(5, 6));
console.log(calcularPotencia(9, 3));
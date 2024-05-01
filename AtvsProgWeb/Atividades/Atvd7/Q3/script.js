
function gerarFibonacci() {
    let serie = [0, 1];
    while (true) {
      let proximoValor = serie[serie.length - 1] + serie[serie.length - 2];
      if (proximoValor > 500) break;
      serie.push(proximoValor);
    }
    return serie;
  }

// Chamando a função
fibonacci = gerarFibonacci()

for (let item in fibonacci) {
    console.log(fibonacci[item]); // Imprimindo cada item de fibonacci

}
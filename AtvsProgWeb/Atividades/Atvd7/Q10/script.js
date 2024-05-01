var readline = require('readline-sync');

function primosAteN(N) {
    let primos = [], divisoes = 0;
    for (let numero = 2; numero <= N; numero++) {
      let isPrimo = true;
      for (let i = 2; i < numero; i++) {
        divisoes++;
        if (numero % i === 0) {
          isPrimo = false;
          break;
        }
      }
      if (isPrimo) primos.push(numero);
    }
    return { primos, divisoes };
}

let n  = readline.question('Digite um numero: ');
numPrimos = primosAteN(n);
console.log(`Primos: ${numPrimos.primos}, Divisoes: ${numPrimos.divisoes}`);

function numPrimo(numero) {

    let divisor = 2;
    let msg = true;

    if (numero <= 1) { // Se um número for 1 ou menor que 1, ele não é primo.

        msg = false;
        return msg;

    } else if (numero === 2) { // Uma excessão o 2 é o unico número primo par.

        return msg;


    // Comparando se o número é totalmente divisivel por 1 , divisivel por ele mesmo e se NÂO é divisivel por 2.
    } else if ((numero % 1 === 0) && (numero % numero === 0) && !(numero % divisor === 0)) { 
        
        return msg;

    } else {

        msg = false;
        return msg;
    }


}

console.log(numPrimo(10));
console.log(numPrimo(2));
console.log(numPrimo(15));
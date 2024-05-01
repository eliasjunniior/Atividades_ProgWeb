
function arrayMedia(array) { //Função que recebe um array e retorna a média.
    
    let soma = 0;
    
    for (num in array) {
        soma += array[num] // Somando cada valor do array em soma;
    }

    return soma / array.length // Dividindo a soma pela quantidade de números dentro do array.
}


let numeros = [1, 3, 4, 5, 6, 7]; 

console.log(arrayMedia(numeros));


function reverseArray(array) {

    let arrayReverse = [];
    
    // Invertendo o array.
    for(let i = array.length - 1; i >= 0; i--){
        
        arrayReverse.push(array[i]); // Utilizando o push para inserir determinado item no arrayReverse.

    }

    return arrayReverse;

}


let array1 = [1, 3, 4, 6, 2, 8, 9]
let array2 = [20, 30, 50, 60]

console.log(reverseArray(array1));
console.log(reverseArray(array2));
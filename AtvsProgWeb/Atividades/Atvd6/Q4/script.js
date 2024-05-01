var readline = require('readline-sync');

let paisA = 80000;
let paisB = 200000;
let taxaA = 3;
let taxaB = 1.5;
let count = 1;

while (paisA <= paisB) {
    
    paisA = paisA * (taxaA / 100) + paisA;
    paisB = paisB * (taxaB / 100) + paisB;

    paisA >= paisB ? console.log(`Pais A: ${Math.round(paisA)} Pais B: ${Math.round(paisB)}`) +
    console.log(`Pais A levara ${count} anos para igualar ou ultrapassar o pais B`) :
    console.log(`Pais A: ${Math.round(paisA)} Pais B: ${Math.round(paisB)}`);

    count++
}

var readlineSync = require('readline-sync');

const polegadas = Number(readlineSync.question('Qual a distancia em polegadas : '));

let Pes = Math.trunc(polegadas * 0.0833333);
let pole = Math.trunc(polegadas - 84);
Math.trunc(polegadas * 0.0833333);


console.log(Pes + ' pes ' + pole + ' polegadas');


/*
Conversão de unidades (polegadas para pés) – Escreva um algoritmo que peça
ao usuário uma distância em polegadas e a transforme em pés e polegadas. Por
exemplo, 86 polegadas equivalem a 7 pés e 2 polegadas. Certifique-se de usar
constantes quando apropriado.

*/
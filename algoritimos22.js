var  readlineSync  = require ( 'readline-sync' ) ; 

const  minutos  = Number (readlineSync.question( 'Quantos minutos para converçao? : ' ));

let horas = minutos/60;
let dias = horas/24;

console.log('minutos convertido para horas :',horas);
console.log('horas convertidas para dias :',dias);


/*
Conversão de unidades (minutos para horas e dias) - Escreva um programa que
aceite uma quantidade de minutos e o converta em horas e dias. Por exemplo,
6.000 minutos equivalem a 100 horas e é igual a 4.167 dias.

*/
var  readlineSync  = require ( 'readline-sync' ) ; 

const  minutos  = Number (readlineSync.question( 'Quantos minutos para converçao? : ' ));

let horas = minutos/60;
let dias = horas/24;

console.log('minutos convertido para goras :',horas);
console.log('horas convertidas para dias :',dias);

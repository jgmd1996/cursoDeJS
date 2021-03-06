var  readlineSync  = require ( 'readline-sync' ) ; 

const  dinheiro  = Number (readlineSync.question( 'Quanto em dinheiro? : '));

let real = Math.trunc(dinheiro/1);
let centavos = dinheiro-real;
let cinquenta = centavos/2;

console.log(real+' moedas de 1 real');
console.log(centavos);
console.log(cinquenta);
// exercicio falho me


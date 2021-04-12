var  readlineSync  = require ( 'readline-sync' ) ; 

const  dinheiro  = Number (readlineSync.question( 'Quanto em dinheiro? : '));

let real = Math.trunc(dinheiro/1);
let centavos = dinheiro-real;
let cinquenta = centavos/2;

console.log(real+' moedas de 1 real');
console.log(centavos);
console.log(cinquenta);
// exercicio falho me

/*
Troco em moedas – Crie um algoritmo que calcule e exiba a conversão de uma
determinada quantidade em reais em moedas de R$ 1.00, R$ 0.50, R$ 0.25, R$
0.10, R$ 0.05 e R$ 0.01. Por exemplo, R$ 3.78 resulta em três moedas de um real,
uma de cinquenta centavos, duas de dez centavos, uma de 5 centavos e três de
um centavo.

*/
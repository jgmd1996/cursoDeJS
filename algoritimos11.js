var  readlineSync  = require ( 'readline-sync' ) ; 

const  temperatura  = Number (readlineSync.question( 'Qual a temperatura? : ' ));

let fahrenheit = temperatura*9/5+32
let celsius =temperatura-32
let celsius1 =celsius*5/9


console.log('Temperatura em fahrenheit ',fahrenheit);
console.log('Temperatura em celsius  ',celsius1);

/*
Conversão de graus Celsius para Fahrenheit – Crie um algoritmo que converta
graus Celsius em Fahrenheit. A fórmula é a seguinte:

F = 9
5
⁄ C + 32

O programa deve solicitar ao usuário que insira uma temperatura em graus
Celsius e, em seguida, exiba a temperatura convertida em Fahrenheit.
Modificação: após construir esse algoritmo, modifique-o para que converta
graus Fahrenheit em graus Celsius.

*/
var  readlineSync  = require ( 'readline-sync' ) ; 

const  refeicao  = Number (readlineSync.question( 'Qual foi o valor da refeiçao? : ' ));

let gorjeta =  refeicao*15/100;
let imposto =  refeicao*7/100;

let total = refeicao+gorjeta+imposto;

console.log('valor da refeiçao R$', refeicao);
console.log('valor da gorjeta R$', gorjeta);
console.log('valor do imposto sobre a refeiçao R$', imposto);
console.log('valor total R$', total);

/*
Gorjeta, Imposto e Total Pago por uma Refeição – Crie um algoritmo que peça
para o usuário informar o valor de uma refeição num restaurante. A partir desse
valor, o algoritmo deverá calcular o valor da gorjeta (15% sobre o valor da
refeição), dos impostos (7% do valor da refeição) e o total a ser pago (valor da
refeição mais os valores da gorjeta e dos impostos). Ao final, o algoritmo deverá
exibir cada um desses valores e o total.

*/
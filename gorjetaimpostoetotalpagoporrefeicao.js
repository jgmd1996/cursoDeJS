var  readlineSync  = require ( 'readline-sync' ) ; 

const  refeicao  = Number (readlineSync.question( 'Qual foi o valor da refeiçao? : ' ));

let gorjeta =  refeicao*15/100;
let imposto =  refeicao*7/100;

let total = refeicao+gorjeta+imposto;

console.log('valor da refeiçao R$', refeicao);
console.log('valor da gorjeta R$', gorjeta);
console.log('valor do imposto sobre a refeiçao R$', imposto);
console.log('valor total R$', total);
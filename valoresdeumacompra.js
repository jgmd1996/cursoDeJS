var  readlineSync  = require ( 'readline-sync' ) ; 

const  arooz    = Number (readlineSync.question( 'Valor do arroz?: ' ));
const  feijao   = Number (readlineSync.question( 'Valor do feijao?: ' ));
const  acucar   = Number (readlineSync.question( 'Valor do açucar?: ' ));
const  farinah  = Number (readlineSync.question( 'Valor do farinha?: ' ));
const  carne    = Number (readlineSync.question( 'Valor do carne?: ' ));

const caucular = arooz + feijao + acucar + farinah + carne;
const porcentagem = caucular*6/100 ;
const caucularPorcentagem = caucular+porcentagem;

console.log('Subtotal da venda :',caucular);
console.log('Valor dos inpostos :',porcentagem);
console.log('Subtotal de vendas mais o valor do imposto :',caucularPorcentagem);
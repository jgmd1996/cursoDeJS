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

/*

Valores de uma Compra – Um cliente de uma loja está comprando cinco
produtos. Crie um algoritmo que solicite o preço de cada um desses produtos e,
em seguida, exiba o subtotal da venda, o valor do imposto e o valor total
(subtotal da venda mais o valor do imposto). Suponha que a alíquota do imposto
seja de 6% sobre o subtotal da venda.

*/
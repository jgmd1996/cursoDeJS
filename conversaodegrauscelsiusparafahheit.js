var  readlineSync  = require ( 'readline-sync' ) ; 

const  temperatura  = Number (readlineSync.question( 'Qual a temperatura? : ' ));

let fahrenheit = temperatura*9/5+32
let celsius =temperatura-32
let celsius1 =celsius*5/9


console.log('Temperatura em fahrenheit ',fahrenheit);
console.log('Temperatura em celsius  ',celsius1);

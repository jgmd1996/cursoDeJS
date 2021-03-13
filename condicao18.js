var  readlineSync  = require ( 'readline-sync' ) ; 
console.log( 'Qual o valor da base 1?: ' );
const  base1    = Number (readlineSync.question( 'Qual o valor da base?: ' ));
const  altura1  = Number (readlineSync.question( 'Qual o valor da altura?: ' ));
console.log( 'Qual o valor da base 2?: ' );
const  base2    = Number (readlineSync.question( 'Qual o valor da base?: ' ));
const  altura2  = Number (readlineSync.question( 'Qual o valor da altura?: ' ));

let calcularBase1 = base1*altura1;
let calcularBase2 =base2*altura2

if(calcularBase1 > calcularBase2){
     console.log('a base 1 e maior que a base 2');
}else if(calcularBase2 > calcularBase1){
     console.log('a base 2 e maior que a base 3')
}else if(calcularBase1 == calcularBase2){
    console.log('os valores sao iguais');
}else{
    console.log('Erro')
}
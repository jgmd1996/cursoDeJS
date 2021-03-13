var  readlineSync  = require ( 'readline-sync' ) ; 

const  varialvel1    = Number (readlineSync.question( 'Qual o valor do numero inteiro 1?: ' ));
const  varialvel2    = Number (readlineSync.question( 'Qual o valor do numero inteiro 2?: ' ));

let calcular1 = varialvel1*varialvel2;
let calcular2 = varialvel2*varialvel1;

if(calcular1 > calcular2){
    console.log('numero inteiro 1 e maior')
}else if(calcular2 > calcular1){
    console.log('numero inteiro 2 e maior')
}else if(calcular2 == calcular1){
    console.log('valores inteiros sao iguais')
}




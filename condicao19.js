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


/*

Faça um algoritmo que leia dois números inteiros e os armazene em duas variáveis
inteiras, digamos, nrA e nrB. Após compará-las, o algoritmo tem que garantir que
o menor valor fique armazenado em nrA e o maior em nrB.
*/

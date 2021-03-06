var  readlineSync  = require ( 'readline-sync' ) ; 

const  numero1  = Number (readlineSync.question( 'Qual o numero da soma? : ' ));
const  numero2  = Number (readlineSync.question( 'Qual o numero da soma? : ' ));
const  numero3  = Number (readlineSync.question( 'Qual o resultado da soma? : ' ));

let cauculo = numero1+numero2;

if(cauculo==numero3){
    console.log('calculo deu erto'+cauculo+' de ',numero3);
}else{
    console.log('Calculo deu errado',cauculo);
    console.log('Era para ser ',numero3);
}
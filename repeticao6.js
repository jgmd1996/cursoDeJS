var  readlineSync  = require ( 'readline-sync' ) ;

const numeros  = Number(readlineSync.question( 'exercicio indique 1 numero qualquer?: ' ));

let soma =0;

for(let calculo = 1 ; calculo <= numeros; calculo ++){
    
    soma = calculo+soma;
    console.log(calculo);
    
    if(calculo == numeros){  
        console.log(soma);

    }
    
}




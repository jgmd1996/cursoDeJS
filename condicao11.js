var  readlineSync  = require ( 'readline-sync' ) ; 

const  segundos  = Number (readlineSync.question( 'Quantos segundos? : ' ));


let calculo =0;


if(segundos>=60){

    calculo=segundos/60
    console.log('segundos convertidos para minutos e igual a ;',calculo);
  
}else {
    console.log('Erro')
}

if(segundos>=3600){

    calculo=segundos/3600
    console.log('segundos convertidos para horas e igual a ;',calculo);
  
}

if(segundos>=86400){

    calculo=segundos/86400
    console.log('segundos convertidos para dias e igual a ;',calculo);
  
}
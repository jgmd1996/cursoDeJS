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

/*
Sabendo que há 60 segundos em um minuto, 3.600 segundos em uma hora e
86.400 segundo em um dia, crie um algoritmo que a partir de uma determinada
quantidade de segundos fornecida pelo usuário, converte-a da seguinte maneira:
• Se a quantidade de segundos for maior ou igual a 60, o programa deverá
exibir o número de minutos equivalente;
• Se a quantidade de segundos for maior ou igual a 3.600, o programa deverá
exibir o número de horas equivalente;
• Se a quantidade de segundos for maior ou igual a 86.400, será exibir o
número de dias equivalente.

*/
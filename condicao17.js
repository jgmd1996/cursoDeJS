var  readlineSync  = require ( 'readline-sync' ) ; 

const  numerosRomanos     = Number (readlineSync.question( 'Qual o numero Romano gostaria de ver?: ' ));


if(numerosRomanos ==1){
    console.log('I');
}else if(numerosRomanos ==2){
    console.log('II');
}else if(numerosRomanos ==3){
    console.log('III');
}else if(numerosRomanos ==4){
    console.log('IV');
}else if(numerosRomanos ==5){
    console.log('V');
}else if(numerosRomanos ==6){
    console.log('VI');
}else if(numerosRomanos ==7){
    console.log('VII');
}else if(numerosRomanos ==8){
    console.log('VIII');
}else if(numerosRomanos ==9){
    console.log('IX');
}else if(numerosRomanos ==10){
    console.log('X');
}else{
    console.log('erro')
}

/*
Crie um algoritmo que leia um número entre 1 e 10 e exiba o correspondente em
números romanos. Se o número estiver fora do intervalo de 1 a 10, uma mensagem
de erro deverá ser exibida.

*/

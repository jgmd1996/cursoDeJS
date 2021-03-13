var  readlineSync  = require ( 'readline-sync' ) ;

console.log('informe qual foi a quantidade de m3 que foi usado')
const bandeira = readlineSync.question( 'Quantos?: ' );

let calculo = 0;
let bandeira1 = 37.47


if(bandeira >= 0 && bandeira <= 5){
    calculo = calculo+37.47;
    console.log('valor a pagar pela 1 faixa',calculo)
}else if(bandeira > 5){
    calculo = calculo+37.47;
    console.log('valor a pagar pela 1 faixa',calculo)
}

if(bandeira >= 6 && bandeira <= 10){
     var menos5 = bandeira - 5;
     var bandeira2 = menos5*1.16;
     calculo = calculo+bandeira2;
     console.log('valor a pagar pela 2 faixa',bandeira2)
    
}else if(bandeira > 10){
    
     var bandeira2 = 5*1.16;
     calculo = calculo+bandeira2;
     console.log('valor a pagar pela 2 faixa',bandeira2)
}

if(bandeira >= 11 && bandeira <= 15){
    var menos5 = bandeira - 10;
    var bandeira3 = menos5*6.46;
    calculo = calculo+bandeira3;
    console.log('valor a pagar pela 3 faixa',bandeira3)
}else if(bandeira > 15){
    var bandeira3 = 5*6.46;
    calculo = calculo+bandeira3;
    console.log('valor a pagar pela 3 faixa',bandeira3)
}

if(bandeira >= 16 && bandeira <= 20){
    var menos5 = bandeira - 15;
    var bandeira4 = menos5*6.49;
    calculo = calculo+bandeira4;
    console.log('valor a pagar pela 4 faixa',bandeira4)
   
} else if(bandeira > 20){
    
    var bandeira4 = 5*6.49;
    calculo = calculo+bandeira4;
    console.log('valor a pagar pela 4 faixa',bandeira4)

}

if(bandeira >= 21 && bandeira <= 30){
    var menos5 = bandeira - 20;
    var bandeira5 = menos5*6.55;
    calculo = calculo+bandeira5;
    console.log('valor a pagar pela 5 faixa',bandeira5)
   
}else if(bandeira > 30){
    
    var bandeira5 = 10*6.55;
    calculo = calculo+bandeira5;
    console.log('valor a pagar pela 5 faixa',bandeira5)
}

if(bandeira > 30){
    var menos5 = bandeira - 30;
    var bandeira6 = menos5*11.08;
    calculo = calculo+bandeira6;
    console.log('valor a pagar pela 6 faixa',bandeira6)
   
}

console.log('VAlor da conta das bandeiras',calculo);
console.log('VAlor do inposto do esgosto',calculo*0.8);
console.log('Total a pagar R$:',(calculo*0.8)+calculo);
var  readlineSync  = require ( 'readline-sync' ) ; 

const  massa  =Number (readlineSync.question( 'Qual a massa do objeto? : ' ));

if(massa*9.8 >= 1000){

    console.log('O objeto e muito pesado');
}else if (massa*9.8 <= 10){
    
    console.log('o objeto e muito leve!',);
}else{
    console.log('indefinido')
}


/*
Os cientistas medem a massa de um objeto em quilogramas e seu peso em
newtons. O peso em Newtons de um objeto pode ser calculado a partir de sua
massa por meio da seguinte fórmula:

Peso = Massa × 9,8

Crie um algoritmo que leia a massa de um objeto e, em seguida, calcule seu peso.
Se o objeto pesar mais de 1.000 Newtons, exiba uma mensagem indicando que é
muito pesado. Se o objeto pesar menos de 10 Newtons, exiba uma mensagem
indicando que está muito leve.

*/
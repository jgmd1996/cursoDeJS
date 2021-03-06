var  readlineSync  = require ( 'readline-sync' ) ; 

const  massa  =Number (readlineSync.question( 'Qual a massa do objeto? : ' ));

if(massa*9.8 >= 1000){

    console.log('O objeto e muito pesado');
}else if (massa*9.8 <= 10){
    
    console.log('o objeto e muito leve!',);
}else{
    console.log('indefinido')
}

var  readlineSync  = require ( 'readline-sync' ) ; 

const  numero1  = Number (readlineSync.question( 'qual e o seu numero gabriel? : ' ));
const  numero2  = Number (readlineSync.question( 'Qual e o seu unmero pedro? : ' ));

console.log('O numero do gabriel e ',numero1);
console.log('O numero do pedro e ',numero2);

if (numero1 > numero2){

    console.log('o numero de gabriel '+numero1+' e maios que do pedro',numero2)
}else if(numero1<numero2){
    console.log('O numero do pedro '+numero2+' e maior que do gabriel',numero1);
}else{
    console.log('os numeros sao iguais')
}

console.log('Meu primeiro exercicio de condiçao feito sozinho')
var  readlineSync  = require ( 'readline-sync' ) ;

console.log('Escolha de 0 10 Tente a sorte')

const  numero   = Number (readlineSync.question( 'numero da sua escolha?: ' ));
let dia   = Math.floor(Math.random()*10);

if(dia == numero){
    console.log("voce ganho parabeins com o numero ",numero);
}else if(numero > dia){
    console.log('resultado :',dia);
    console.log('Seu palpite :',numero);
    console.log('Palpite alto');
}else if(numero < dia){
    console.log('resultado :',dia);
    console.log('Seu palpite :',numero);
    console.log('Palpite a baixo');
}
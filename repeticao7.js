var  readlineSync  = require ( 'readline-sync' ) ;

let numero = 0;
let soma = 0;

do{
    numero  = Number(readlineSync.question( 'Digite um numero,caso queira parar digite 999' ));
    if(numero != 999){
        soma+=numero;
    }
}while(numero != 999);

console.log(soma);






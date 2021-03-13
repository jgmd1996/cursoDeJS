var  readlineSync  = require ( 'readline-sync' ) ; 

const  ano   = Number (readlineSync.question( 'ano?: ' ));

let calcular = ano*400/100;
let calcular2 =ano*4/100;
let calcular1 =ano*100/100




if(ano%4 == 0 ){
    console.log('sera deu certo?')
}else(
    console.log('nao e ')
)



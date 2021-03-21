var  readlineSync  = require ( 'readline-sync' ) ;

console.log('Qual cafe deseja tomar escolha a opçao')
console.log('Opçao "1"  Café normal R$:1.05')
console.log('Opçao "2"  Café expresso R$:1.52')
console.log('Opçao "3"  Capuccino R$:2.17')
console.log('Opçao "4"  Mocaccino R$:2.36')

const cafe = readlineSync.question( 'Qual opçao escolhida ?: ' );
console.log('ensira as moedas')
const moeda1  = Number(readlineSync.question( 'moeda de 0,01 centavos?: ' ));
const moeda5  = Number(readlineSync.question( 'moeda de 0,05 centavos?: ' ));
const moeda10 = Number(readlineSync.question( 'moeda de 0,10 centavos?: ' ));
const moeda25 = Number(readlineSync.question( 'moeda de 0,25 centavos?: ' ));
const moeda50 = Number(readlineSync.question( 'moeda de 0,50 centavos?: ' ));
const moeda1r = Number(readlineSync.question( 'moeda de 1,00 real?: ' ));

let valorMoeda1  =moeda1*0.01;
let valorMoeda5  =moeda1*0.05;
let valorMoeda10 =moeda1*0.10;
let valorMoeda25 =moeda1*0.25;
let valorMoeda50 =moeda1*0.50;
let valorMoeda1r =moeda1*1.00;



let valor = valorMoeda1+valorMoeda5+valorMoeda10+valorMoeda25+valorMoeda50+valorMoeda1r;


let calculo =0;
/*

if(cafe == 1){

    console.log('sua escola foi de cafe normal no valor de 1.05');
    console.log('seu troco e ',dinheiroRecebido-1.05)
    if(dinheiroRecebido){
        let unidade = dinheiroRecebido%10;
        dinheiroRecebido =dinheiroRecebido/10;
        console.log(unidade)
    }else if(dinheiroRecebido){
        let dezena = dinheiroRecebido%10;
        dinheiroRecebido =dinheiroRecebido/10;
        console.log(dezena)

    }else if(dinheiroRecebido){
        let centena = dinheiroRecebido%10;
        dinheiroRecebido =dinheiroRecebido/10;
        console.log(centena)

    }
    
}
*/
console.log(valor)
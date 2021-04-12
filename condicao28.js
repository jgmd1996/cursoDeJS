var  readlineSync  = require ( 'readline-sync' ) ;

console.log('Escolha de 0 a 9 Tente a sorte')
console.log('Tem direito a 3 tentativas')

const tentativas1 = Number (readlineSync.question( 'Tentavisa 1?: ' ));
const tentativas2 = Number (readlineSync.question( 'Tentavisa 2?: ' ));
const tentativas3 = Number (readlineSync.question( 'Tentavisa 3?: ' ));

let numero1   = Math.floor(Math.random()*9);
let numero2   = Math.floor(Math.random()*9);
let numero3   = Math.floor(Math.random()*9);

if(tentativas1 == numero1 && tentativas2 == numero2 && tentativas3 == numero3){
    console.log('parabeins voce ganho 1,000,00 pontos')
    if(tentativas1 == numero1){
        console.log("voce ganho 10 ponrtos ",);
    }else if(tentativas2 == numero1){
        console.log('resultado :',dia);
        console.log('Seu palpite :',numero);
        console.log('Palpite alto');
    }else if(numero < dia){
        console.log('resultado :',dia);
        console.log('Seu palpite :',numero);
        console.log('Palpite a baixo');
    }
}else{
    console.log('Ganho 0 pontos ')
}

/*
Crie um algoritmo que funcione como um jogo de loteria, conforme as seguintes
regras:
a. O algoritmo deve gerar três números aleatórios entre 0 e 9;
b. O usuário deve fornecer um palpite com três números, também entre 0 e
9;
c. Cada um dos palpites do usuário deve ser comparado com os números
aleatórios, de acordo com a tabela abaixo:
Números Correspondentes Número de pontos
Nenhum número coincidente 0
Acertar um número 10
Acertar dois números 100
Acertar os três números, mas não na
mesma ordem em que foram
gerados

1000

Ministério da Educação

Acertar três números na mesma
ordem que os números aleatórios

1.000.000

Ao final, exiba uma mensagem que inclua os chutes do usuário, os três números
sorteados aleatoriamente e a quantidade de pontos que o usuário ganhou.

*/


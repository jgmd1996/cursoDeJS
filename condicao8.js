var  readlineSync  = require ( 'readline-sync' ) ; 

console.log('Jogo do dolar,acerte o valor do dolar em real usando apenas moedas de centavos')
const  dolar      = Number (readlineSync.question( 'quanto vale 1 dolar em real?'));
const  centavo1   = Number (readlineSync.question( 'quantos moedas de 1 centavo?'));
const  centavo5   = Number (readlineSync.question( 'Quantas moedas de 5 centavos? : ' ));
const  centavo10  = Number (readlineSync.question( 'Quantas moedas de 10 centavos? : ' ));
const  centavo25  = Number (readlineSync.question( 'Quantas moedas de 25 centavos? : ' ));
const  centavo50  = Number (readlineSync.question( 'Quantas moedas de 50 centavos? : ' ));

let centavox1  = centavo1*0.01;
let centavox5  = centavo5*0.05;
let centavox10 = centavo10*0.10;
let centavox25 = centavo25*0.25;
let centavox50 = centavo50*0.50;

let calculo = centavox1+centavox5+centavox10+centavox25+centavox50;

if(calculo == dolar){
    console.log('Parabeins ganho o jogo');
    console.log(dolar,' de ',calculo);
}else{
    console.log('Fim de jogo!');
    console.log(dolar,' de ',calculo);
}

/*
“Jogo do Dolar” – Construa um algoritmo onde o usuário informa o valor do dólar
no câmbio atual e um certo número de moedas de 1, 5, 10, 25 e 50 centavos de
real. Se o valor total das moedas for o necessário para comprar exatamente um
dolar, o programa deve parabenizar o usuário por ganhar o jogo. Caso contrário,
o programa deve exibir uma mensagem indicando se o valor inserido foi maior ou
menor do que o necessário.

Ministério da Educação
Exemplo: se o dólar estiver a R$ 3.78, e o usuário informar 3 moedas de 1 centavo,
uma de 5 centavos, duas de 10 centavos, duas de 25 centavos e 6 de 50 centavos,
ele ganha o jogo. O mesmo aconteceria se ele informasse 3 moedas de 1 centavo,
13 de 25 centavos e uma de cinquenta centavos.

*/
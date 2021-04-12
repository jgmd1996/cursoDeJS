var  readlineSync  = require ( 'readline-sync' ) ;

console.log('informe qual das 5 opcoes forao acertadas se acerto digite "s" se n acerto digite "n"')
const numero1 = readlineSync.question( 'acerto a 1 questao?: ' );
const numero2 = readlineSync.question( 'acerto a 2 questao?: ' );
const numero3 = readlineSync.question( 'acerto a 3 questao?: ' );
const numero4 = readlineSync.question( 'acerto a 4 questao?: ' );
const numero5 = readlineSync.question( 'acerto a 5 questao?: ' );

let calculo = 0;


if(numero1 == 's'){
    var um = 1;
    calculo = calculo+um;
    console.log('Resposta da questao 1 esta correta')
    console.log(1)

}else if(numero1 == 'n'){
    console.log('Resposta da questao 1 esta errada')
    console.log(0)
}

if(numero2 == 's'){
    var dez = 10;
    calculo = calculo+dez;
    console.log('Resposta da questao 2 esta correta')
    console.log(10)

}else if(numero2 == 'n'){
    console.log('Resposta da questao 2 esta errada')
    console.log(0)
}
if(numero3 == 's'){
    var cem = 100;
    calculo = calculo+cem;
    console.log('Resposta da questao 3 esta correta')
    console.log(100)

}else if(numero3 == 'n'){
    console.log('Resposta da questao 3 esta errada')
    console.log(0)
}
if(numero4 == 's'){
    var mil = 1000;
    calculo = calculo+mil;
    console.log('Resposta da questao 4 esta correta')
    console.log(1000)

}else if(numero4 == 'n'){
    console.log('Resposta da questao 4 esta errada')
    console.log(0)
}
if(numero5 == 's'){
    var dezMil = 10000;
    calculo = calculo+dezMil;
    console.log('Resposta da questao 5 esta correta')
    console.log(10000)
    console.log('VAlor total',calculo)

}else if(numero5 == 'n'){
    console.log('Resposta da questao 5 esta errada')
    console.log(0)
    console.log('VAlor total',calculo)

}else{
    console.log('resposta não aceitavel!')
}

/*
As provas de vestibular de uma determinada universidade são constituídas por
questões de múltiplas escolhas, com 5 alternativas. A primeira alternativa vale 1
ponto, a segunda 10 pontos, a terceira 100 pontos, a quarta 1000 pontos e a quinta
10.000 pontos. Cada candidato deve assinalar as alternativas que considerar
corretas, somando os pontos correspondentes e escrever essa soma como sendo a
resposta no gabarito da prova. Por exemplo, se numa questão um determinado
candidato assinalou as alternativas 1, 2 e 3 como sendo as corretas, então sua
resposta seria 1+10+100 = 111; se tivesse assinalado as alternativas 1, 3 e 5 a
resposta seria 1+100+10.000 = 10.101. Se nenhuma alternativa for assinalada,
então a resposta seria 0; se forem assinaladas todas as alternativas, a resposta seria
1 + 10 + 100 + 1000 + 10.000 = 11.111. Crie um programa que leia a resposta
fornecida pelo candidato na prova e diga quais foram as alternativas que ele
assinalou.

*/
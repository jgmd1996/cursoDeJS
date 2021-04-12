var  readlineSync  = require ( 'readline-sync' ) ;

console.log('informe qual foi a quantidade de m3 que foi usado')
const bandeira = readlineSync.question( 'Quantos?: ' );

let calculo = 0;
let bandeira1 = 37.47


if(bandeira >= 0 && bandeira <= 5){
    calculo = calculo+37.47;
    console.log('valor a pagar pela 1 faixa',calculo)
}else if(bandeira > 5){
    calculo = calculo+37.47;
    console.log('valor a pagar pela 1 faixa',calculo)
}

if(bandeira >= 6 && bandeira <= 10){
     var menos5 = bandeira - 5;
     var bandeira2 = menos5*1.16;
     calculo = calculo+bandeira2;
     console.log('valor a pagar pela 2 faixa',bandeira2)
    
}else if(bandeira > 10){
    
     var bandeira2 = 5*1.16;
     calculo = calculo+bandeira2;
     console.log('valor a pagar pela 2 faixa',bandeira2)
}

if(bandeira >= 11 && bandeira <= 15){
    var menos5 = bandeira - 10;
    var bandeira3 = menos5*6.46;
    calculo = calculo+bandeira3;
    console.log('valor a pagar pela 3 faixa',bandeira3)
}else if(bandeira > 15){
    var bandeira3 = 5*6.46;
    calculo = calculo+bandeira3;
    console.log('valor a pagar pela 3 faixa',bandeira3)
}

if(bandeira >= 16 && bandeira <= 20){
    var menos5 = bandeira - 15;
    var bandeira4 = menos5*6.49;
    calculo = calculo+bandeira4;
    console.log('valor a pagar pela 4 faixa',bandeira4)
   
} else if(bandeira > 20){
    
    var bandeira4 = 5*6.49;
    calculo = calculo+bandeira4;
    console.log('valor a pagar pela 4 faixa',bandeira4)

}

if(bandeira >= 21 && bandeira <= 30){
    var menos5 = bandeira - 20;
    var bandeira5 = menos5*6.55;
    calculo = calculo+bandeira5;
    console.log('valor a pagar pela 5 faixa',bandeira5)
   
}else if(bandeira > 30){
    
    var bandeira5 = 10*6.55;
    calculo = calculo+bandeira5;
    console.log('valor a pagar pela 5 faixa',bandeira5)
}

if(bandeira > 30){
    var menos5 = bandeira - 30;
    var bandeira6 = menos5*11.08;
    calculo = calculo+bandeira6;
    console.log('valor a pagar pela 6 faixa',bandeira6)
   
}

console.log('VAlor da conta das bandeiras',calculo);
console.log('VAlor do inposto do esgosto',calculo*0.8);
console.log('Total a pagar R$:',(calculo*0.8)+calculo);

/*
Fatura da Sanepar – as regras que a Sanepar utiliza para cobrar a fatura
de água e esgoto de clientes residenciais estão expressas na tabela abaixo. Repare
que existem 6 faixas de consumo e que cada uma possui uma franquia de consumo
e um valor diferente para cada metro cúbico (m3

) consumido.
Faixas de Consumo Totais (R$)

Faixa Volume da Faixa Franquia de
consumo

Valor
(R$/m3) Água Esgoto

1a Mínimo (até 5 m3

) 5 m3 R$ 37,47 37,47 29,97

2a de 6 m3 a 10 m3

5 m3 R$ 1,16 5,80 4,64

3a de 11 m3 a 15 m3

5 m3 R$ 6,46 32,30 25,84

4a de 16 m3 a 20 m3

5 m3 R$ 6,49 32,45 25,96

5a de 21 m3 a 30 m3

10 m3 R$ 6,55 65,50 52,40

6a acima de 30 m3

Livre R$ 11,08

O valor de uma fatura é calculado distribuindo-se o consumo total de água de água
pelas faixas de consumo. Caso um cliente tenha consumido menos de 5 m3
, deve
pagar a tarifa mínima (R$ 37,47) mas se consumiu digamos, 12 m3 de água, 5 m3
são cobrados pela 1a faixa, outros 5 m3 pela 2a faixa e os 2 m3

restantes são
cobrados pela 3a faixa. O valor do esgoto é calculado como sendo 80% do valor
cobrado pela água. A coluna “Totais” mostra quanto seria cobrado de um cliente
que tenha consumido toda a franquia das faixas correspondentes (com exceção da
última faixa, que não possui franquia de consumo).

Ministério da Educação
Com base nessas informações, elabore um programa que calcule o valor da fatura
de um cliente com base em seu consumo de água, utilizando o exemplo a seguir
para auxiliar na compreensão do problema.
Exemplo: Assuma que que um determinado domicílio consumiu 37 m3 de água
num determinado mês. Para o cálculo da respectiva fatura, deve-se distribuir esse
volume pelas faixas de consumo da tabela, como explicado abaixo:
(1) 1a faixa (franquia de 5 m3) – O consumo dos primeiros 5 (cinco) m3 de
água são faturados pela tarifa mínima, que é de R$ 37,47. Dos 37 m3
consumidos, restam 32 m3 para serem faturados pelas demais faixas de
consumo;
(2) 2a faixa (franquia de 5 m3) – Os próximos 5 (cinco) m3 que ultrapassam
o consumo da 1a faixa são cobrados pelo valor de excedente da 2a faixa
de consumo da tabela abaixo (5 m3 × R$ 1,16 = R$ 5,80). Dos 37 m3
consumidos, 5 foram faturados pela 1a faixa e outros 5 pela 2a faixa
restando, portanto, 27 m3 para serem faturados;
(3) 3a faixa (franquia de 5 m3) – Os próximos 5 (cinco) m3 que ultrapassam
o consumo da 2a faixa são cobrados pelo valor de excedente da 3a faixa
de consumo (5 m3 × R$ 6,46 = R$ 32,30). Até essa faixa, foram
faturados 15 m3 e restam ainda 22 m3 para serem faturados;
(4) 4a faixa (franquia de 5 m3) – Os próximos 5 (cinco) m3 que ultrapassam
o consumo da 3a faixa são cobrados pelo valor de excedente da 4a faixa
de consumo (5 m3 × R$ 6,49 = R$ 32,45). Até essa faixa, foram
faturados 20 m3 e restam ainda 17 m3 para serem faturados;
(5) 5a faixa (franquia de 10 m3) – Os próximos 10 (dez) m3 que ultrapassam
o consumo da 4a faixa são cobrados pelo valor de excedente da 5a faixa
de consumo (10 m3 × R$ 6,55 = R$ 65,50). Até essa faixa, foram
faturados 30 m3 e restam ainda 7 m3 para serem faturados;
(6) 6a faixa (franquia livre) – Os próximos 7 (sete) m3 que ultrapassam o
consumo da 5a faixa são cobrados pelo valor de excedente da 6a faixa
de consumo (7 m3 × R$ 11,08 = R$ 77,56). Até essa faixa, foram
faturados 37 m3, que foi o valor consumido pelo cliente;
(7) Para obter o valor da água consumida, deve-se somar o consumo em
cada faixa, ou seja, R$ 37,47 + R$ 5,80 + R$ 32,30 + R$ 32,45 + R$
65,50 + R$ 77,56 = R$ 251, 08;
(8) O valor referente ao esgoto corresponde a 80% do valor da água, ou
seja, R$ 251,08 × 0,8 = R$ 200,86;
(9) O valor da fatura é dado pela soma do consumo de água pela do esgoto,
ou seja, R$ 251,08 + R$ 200,86 = R$ 451,94.

*/
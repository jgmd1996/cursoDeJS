var  readlineSync  = require ( 'readline-sync' ) ; 

const  rgDoProprietario  = Number (readlineSync.question( 'RG do proprietario? : ' ));
const  racaDoCao         = readlineSync.question( 'Qual a raça do cachorro(a)? : ' );
const  nomeDoCao         = readlineSync.question( 'Qual o nome do cachorro(a)? : ' );
const  idadeDoCao        = Number (readlineSync.question( 'Qual a idade do cachorro(a)? : ' ));
const  kgDoCao           = Number (readlineSync.question( 'Quantos kilos o cachorro(a) pesa? : ' ));


let calculo =0;

if(kgDoCao<8){
    console.log('RG do proprietario :',rgDoProprietario);
    console.log('Raça do cachorro(a) :',racaDoCao);
    console.log('Nome do cachorro(a) :',nomeDoCao);
    console.log('Idade do cachorro(a) :', idadeDoCao);
    console.log('orçamento de ospedagem de uma semana e R$: 50,00');
}else if(kgDoCao >= 8 && kgDoCao < 15){
    console.log('RG do proprietario :',rgDoProprietario);
    console.log('Raça do cachorro(a) :',racaDoCao);
    console.log('Nome do cachorro(a) :',nomeDoCao);
    console.log('Idade do cachorro(a) :', idadeDoCao);
    console.log('orçamento de ospedagem de uma semana e R$: 70,00');
}else if(kgDoCao >= 15 && kgDoCao < 40){
    console.log('RG do proprietario :',rgDoProprietario);
    console.log('Raça do cachorro(a) :',racaDoCao);
    console.log('Nome do cachorro(a) :',nomeDoCao);
    console.log('Idade do cachorro(a) :', idadeDoCao);
    console.log('orçamento de ospedagem de uma semana e R$: 100,00');
}else if(kgDoCao >= 40){
    console.log('RG do proprietario :',rgDoProprietario);
    console.log('Raça do cachorro(a) :',racaDoCao);
    console.log('Nome do cachorro(a) :',nomeDoCao);
    console.log('Idade do cachorro(a) :', idadeDoCao);
    console.log('orçamento de ospedagem de uma semana e R$: 125,00');
}

/*
Um certo petshop também funciona como um hotel para cães. De acordo com a
tabela de preços desse estabelecimento, a taxa semanal para hospedagem é de R$
50.00 para cães com menos de 8 kg, R$ 70.00 para cães que pesem entre 8 e 15
kg inclusive, R$ 100.00 para cães entre 15 e 40 kg e R$ 125.00 para cães com
mais de 40 kg. Construa um algoritmo que leia o RG do proprietário de um cão,
bem como o nome, raça, idade e peso desse cão e, de posse desses dados, exiba

Ministério da Educação
um orçamento contendo todos os dados de entrada e o custo para hospedar o
animal por uma semana.

*/
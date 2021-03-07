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
var  readlineSync  = require ( 'readline-sync' ) ; 

const  numeroDaApolice     = Number (readlineSync.question( 'Qual o numero de apolices: ' ));
const  nome                = readlineSync.question( 'Qual o seu nome?: ' );
const  sobreNome           = readlineSync.question( 'Qual o seu sobrenome?: ' );
const  idade               = Number (readlineSync.question( 'Qual a sua idade?: ' ));
console.log('Informe a data de Vencimento do premio');
const  dia                 = Number (readlineSync.question( 'dia?: ' ));
const  mes                 = Number (readlineSync.question( 'mes?: ' ));
const  ano                 = Number (readlineSync.question( 'ano?: ' ));
const  numeroDeAceidentes  = Number (readlineSync.question( 'Numero de acidentes nos ultimos 3 anos?: ' ));


let calcular =0;
if(numeroDaApolice >=1000 && numeroDaApolice<=9999){
    console.log('Numero da apolice',numeroDaApolice);   
}
else {
    console.log('Numero da apolice e iagual a :0',);    
}

console.log('nome do cliente',nome);
console.log('sobrenome do cliente',sobreNome);
console.log('idade do cliente',idade);


if(mes >12 || mes <1){
    console.log('Data de vencimento 0/0/0');;

}else{
    
    if((mes ==1 || mes == 3 || mes ==5 || mes ==7 || mes == 8 || mes== 10 || mes == 12) && (dia > 31 || dia <1)){
        console.log('Data de vencimento 0/0/0');
    }else if((mes ==4 || mes ==6 || mes == 9 || mes == 11) && (dia >30 || dia< 1)){
        console.log('Data de vencimento 0/0/0');
    }else if((mes == 2)&&( dia >28 || dia < 1)){
        console.log('Data de vencimento 0/0/0');
    }else{
        console.log('Data de vencimento '+dia+'/'+mes+'/'+ano);
    }
}
console.log('numero de acidentes em 3 anos :',numeroDeAceidentes);


/*
Uma seguradora comercializa apólices de seguro para automóveis. Crie um
algoritmo para essa seguradora para ler os dados de uma apólice de seguro,
incluindo o número da apólice, sobrenome do cliente, nome do cliente, idade, data
de vencimento do prêmio (mês, dia e ano) e número de acidentes de motorista nos
últimos três anos. Se um número da apólice inserido não estiver entre 1000 e 9999,
defina-a como sendo 0. Se o mês do vencimento não estiver entre 1 e 12 inclusive,
ou o dia não estiver correto para o mês (por exemplo, não entre 1 e 31 para Janeiro
ou 1 e 29 para fevereiro), defina o mês, dia e ano como 0. Após essas críticas,
exiba os dados da apólice.

*/

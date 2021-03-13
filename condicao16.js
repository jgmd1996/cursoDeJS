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


/*if(mes ==1 && mes == 3 && mes ==5 && mes ==7 && mes == 8 && mes== 10 && mes == 12 && dia <= 31){
    console.log('Data de vencimento '+dia+'/'+mes+'/'+ano);

}else if(mes > 12){
    console.log('Data de vencimento 0/0/0');
}else if(dia >31){
    console.log('Data de vencimento 0/0/0');
}


if(mes ==4 && mes ==6 && mes == 9 && mes == 11 && dia <=30){
    console.log('Data de vencimento '+dia+'/'+mes+'/'+ano);
}else if(mes > 12){
    console.log('Data de vencimento 0/0/0');
}else if(dia >30){
    console.log('Data de vencimento 0/0/0');
}


if(mes == 2 && dia <=28){
    console.log('Data de vencimento '+dia+'/'+mes+'/'+ano);
}else if(mes > 12){
    console.log('Data de vencimento 0/0/0');
}else if(dia >28){
    console.log('Data de vencimento 0/0/0');
}
*/

var  readlineSync  = require ( 'readline-sync' ) ; 

const  dia   = Number (readlineSync.question( 'dia?: ' ));
const  mes   = Number (readlineSync.question( 'mes?: ' ));
const  ano   = Number (readlineSync.question( 'ano?: ' ));


if(mes >12 || mes <1){
    console.log('Data de vencimento 0/0/0');;

}else{
    
    if((mes ==1 || mes == 3 || mes ==5 || mes ==7 || mes == 8 || mes== 10 || mes == 12) && (dia > 31 || dia <1)){
        console.log('Data nao aceitavel');
    }else if((mes ==4 || mes ==6 || mes == 9 || mes == 11) && (dia >30 || dia< 1)){
        console.log('Data nao aceitavel');
    }else if((ano%4 ==0)&&(mes == 2)&&(dia == 29)){
        console.log('Data  '+dia+'/'+mes+'/'+ano);
        console.log('e um ano bisexto')
    }else if((mes == 2)&&( dia >28 || dia < 1)){
        console.log('Data nao aceitavel');
    }else{
        console.log('Data  '+dia+'/'+mes+'/'+ano);
        if(ano%4 == 0 ){
            console.log('e um ano bisexto')
        }else if(ano%4 > 0){
            console.log('Não e um ano bisexto')
        }else{
            console.log('erro')
        }
    }
}


/*
Escreva um programa que peça ao usuário para fornecer um dia, mês e o ano arbitrários
e determine se esses dados correspondem a uma data válida. Não deixe de considerar
que existem meses com 30 e 31 dias, e que fevereiro pode ter 28 ou 29 dias,
dependendo se o ano for bissexto. Considere que um ano é bissexto quando for divisível
por 4, com exceção dos anos centenários (aqueles que são divisíveis por 100, como
1700, 1800, etc).

*/
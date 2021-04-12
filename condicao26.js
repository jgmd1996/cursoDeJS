var  readlineSync  = require ( 'readline-sync' ) ; 

console.log('Digite a data para saber qual sera o proximo dia')
const  dia   = Number (readlineSync.question( 'dia?: ' ));
const  mes   = Number (readlineSync.question( 'mes?: ' ));
const  ano   = Number (readlineSync.question( 'ano?: ' ));

let calcular = dia+1;

if(mes >12 || mes <1){
    console.log('Data de vencimento 0/0/0');;

}else{
    
    if((mes ==1 || mes == 3 || mes ==5 || mes ==7 || mes == 8 || mes== 10 || mes == 12) && (calcular > 31 || calcular <1)){
        console.log('Data nao aceitavel');
    }else if((mes ==4 || mes ==6 || mes == 9 || mes == 11) && (calcular >30 || calcular < 1)){
        console.log('Data nao aceitavel');
    }else if((ano%4 ==0)&&(mes == 2)&&(calcular == 29)){
        console.log('Data  '+calcular+'/'+mes+'/'+ano);
        console.log('e um ano bisexto')
    }else if((mes == 2)&&( calcular >28 || calcular < 1)){
        console.log('Data nao aceitavel');
    }else{
        console.log('Data  '+calcular+'/'+mes+'/'+ano);
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
Construa um algoritmo que leia uma data qualquer (dia, mês e ano) e calcule a
data do próximo dia. Lembre-se que em anos bissextos o mês de fevereiro tem 29
dias. Lembre-se que um ano é bissexto quando for divisível por 4.

*/

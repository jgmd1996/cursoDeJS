var  readlineSync  = require ( 'readline-sync' ) ; 

const  mes  = Number (readlineSync.question( 'Qual mes do nascimento?: ' ));
const  dia  = Number (readlineSync.question( 'Qual o dia do nascimento?: ' ));


let calculo =dia*mes;

if(calculo>=10){
    console.log('Data de nascimento '+dia+'/'+mes+'/'+calculo);
    console.log('E uma data magica');
}else{
    console.log('Data de nascimento '+dia+'/'+mes+'/'+calculo);
    console.log('E uma data Não magica');

}


/*
Uma data no formato dd/mm/yy (ano representado por dois dígitos) é considerada
“mágica” quando o dia multiplicado pelo mês resulta no ano. Esse é o caso de
datas como 9/02/18, 2/09/18, 13/04/52 ou 2/10/20, por exemplo. Sabendo disso,
crie um algoritmo que leia um dia (em formato numérico), mês e ano com dois
dígitos, informando se é uma “data mágica” ou não.

*/


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



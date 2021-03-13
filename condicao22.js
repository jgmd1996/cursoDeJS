var  readlineSync  = require ( 'readline-sync' ) ; 

console.log('Informe as notas e faltas dos 4 semestres!');
//1 semestre
const  notaSemestre1      = Number ( readlineSync.question( ' nota dos semestre?: ' ));
const  totalDeAulas1      = Number ( readlineSync.question( ' Quantas aulas forao dadas nos semestre: ' ));
const  faltaSemrestre1    = Number (readlineSync.question( ' faltas nos semestre?: ' ));

let porcentagens1 =totalDeAulas1*25/100;
let calculoAulas1 =totalDeAulas1-porcentagens1;

if(totalDeAulas1 >= calculoAulas1){
    console.log('aprovado')
    console.log('Total e aulas assistidas :',totalDeAulas1);
    console.log('Total de faltas :',faltaSemrestre1);
    if(notaSemestre1 >= 28){
        console.log('AProvado');
        console.log('Nota Total :',notaSemestre1)
    }else {
        console.log('Reprovado');
        console.log('Media Total não alcançada de 28')
    }
}else{
    console.log('Reprovado1')
    console.log('total de faltas permitidas :',porcentagens1);
}

console.log(calculoAulas1);



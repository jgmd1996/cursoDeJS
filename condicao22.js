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

/*
Numa determinada escola, os critérios de aprovação são os seguintes:

• O aluno deve ter, no máximo, 25% de faltas;
• A nota final deve ser igual ou superior a 7,00.
Construa um algoritmo para ler as notas que um aluno tirou nos 4 bimestres, o
número total de aulas e o número de faltas, mostrando ao final a situação do aluno
como sendo “Aprovado”, “Reprovado por Faltas” e “Reprovado por média”,
considerando que a reprovação por faltas se sobrepõe a reprovação por nota.
Após construir esse algoritmo, crie mais duas versões dele para prever as seguintes
situações:
• Um aluno pode ficar em recuperação se possuir frequência suficiente
(superior a 75%) e média superior a 5 mas inferior a 7;
• Caso um aluno reprove por média e faltas, sua situação deve ser
“Reprovado por Média e Faltas” (ao invés de simplesmente
“Reprovado por Faltas” como antes).

*/



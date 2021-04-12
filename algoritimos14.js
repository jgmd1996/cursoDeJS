var  readlineSync  = require ( 'readline-sync' ) ; 

const  quantidade  = Number (readlineSync.question( 'Quantos pessoas tem na sala? : ' ));
const  homen  = Number (readlineSync.question( 'Quantos homen tem na sala? : ' ));
const  mulher  = Number (readlineSync.question( 'Quantas mulheres tem na sala? : ' ));

let homenQuantidade  = homen/quantidade*100;
let mulherQuantidade = mulher/quantidade*100;


console.log('porcentagem de  Homens na sala :'+homenQuantidade+'%');
console.log('porcentagem de  Mulheres na sala :'+mulherQuantidade+'%');

/*
Porcentagens de homens e mulheres numa sala de aula – Crie um algoritmo
que solicite ao usuário que informe o número de homens e o número de
mulheres matriculadas numa classe e exiba os percentuais equivalentes a cada
sexo na tela.
Exemplo: suponha que existam 8 homens e 12 mulheres em uma classe
totalizando, portanto, 20 alunos na turma. A porcentagem de homens pode ser
calculada como 8/20 = 0,4 ou 40% e a porcentagem de mulheres pode ser
calculada como 12/20 = 0,6 ou 60%.

*/
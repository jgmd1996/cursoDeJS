var  readlineSync  = require ( 'readline-sync' ) ; 

const  quantidade  = Number (readlineSync.question( 'Quantos pessoas tem na sala? : ' ));
const  homen  = Number (readlineSync.question( 'Quantos homen tem na sala? : ' ));
const  mulher  = Number (readlineSync.question( 'Quantas mulheres tem na sala? : ' ));

let homenQuantidade  = homen/quantidade*100;
let mulherQuantidade = mulher/quantidade*100;


console.log('porcentagem de  Homens na sala :'+homenQuantidade+'%');
console.log('porcentagem de  Mulheres na sala :'+mulherQuantidade+'%');
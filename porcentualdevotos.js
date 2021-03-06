var  readlineSync  = require ( 'readline-sync' ) ; 

const  arroz  = Number (readlineSync.question( 'Quantidade de votos do partido arroz entre 1000? : ' ));
const  feijao  = Number (readlineSync.question( 'Quantidade de votos do partido feijao entre 1000? : ' ));
const  frango  = Number (readlineSync.question( 'Quantidade de votos do partido frango entre 1000? : ' ));

let arrozPorcentagem = arroz/100*10;
let feijaoPorcentagem = feijao/100*10;
let frangoPorcentagem = frango/100*10;
//desconto=(salario*7.5)/100;



console.log('o partido arroz teve '+arrozPorcentagem+'% da intençao de votos');
console.log('o partido feijao teve '+feijaoPorcentagem+'% da intençao de votos');
console.log('o partido frango teve '+frangoPorcentagem+'% da intençao de votos');
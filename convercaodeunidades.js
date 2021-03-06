var  readlineSync  = require ( 'readline-sync' ) ; 

const  milhas  = Number (readlineSync.question( 'distancia em milhas que forao percorridas? : ' ));


const pes                   = milhas*6000;
const jardas                = milhas*2000;
const milhasParaPolegagas   = milhas*63360;

console.log('converçao de milhas :'+milhas+' e igual a :'+ pes +' pes');
console.log('converçao de milhas :'+milhas+' e igual a :'+ jardas +' jardas');
console.log('converçao de milhas :'+milhas+' e igual a :'+ milhasParaPolegagas +' polegadas');


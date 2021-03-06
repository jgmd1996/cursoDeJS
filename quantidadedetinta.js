var  readlineSync  = require ( 'readline-sync' ) ; 

const  quantidade  = Number (readlineSync.question( 'Quantos quartos de tinta forao usados? : ' ));

let tinta = Math.trunc(quantidade*0.25);
let tintaquebradin =quantidade*0.25;
let cauculo = (tintaquebradin%4)*4;

console.log('Sera necessario para o trabalho '+tinta+' Galoes e '+cauculo+"/4");


var  readlineSync  = require ( 'readline-sync' ) ; 

const  milhas  = Number (readlineSync.question( 'distancia em milhas que forao percorridas? : ' ));


const pes                   = milhas*6000;
const jardas                = milhas*2000;
const milhasParaPolegagas   = milhas*63360;

console.log('converçao de milhas :'+milhas+' e igual a :'+ pes +' pes');
console.log('converçao de milhas :'+milhas+' e igual a :'+ jardas +' jardas');
console.log('converçao de milhas :'+milhas+' e igual a :'+ milhasParaPolegagas +' polegadas');

/*
Conversão de unidades (milhas para polegadas, pés e jardas) – Escreva um
algoritmo que utilize constantes para armazenar o número de polegadas, pés e
jardas contidas em uma milha (procure essas informações na Internet). Com
essas constantes, esse algoritmo deve pedir ao usuário que informe uma certa
distância em milhas e a converta para polegadas, pés e jardas, as quais devem
ser exibidas junto a um texto explicativo.

*/

var  readlineSync  = require ( 'readline-sync' ) ; 

const  polegadas  = Number (readlineSync.question( 'Qual a distancia em polegadas : ' ));

let Pes       = Math.trunc(polegadas*0.0833333);
let pole = Math.trunc(polegadas-84);
Math.trunc(polegadas*0.0833333);


console.log(Pes+' pes '+pole+' polegadas');



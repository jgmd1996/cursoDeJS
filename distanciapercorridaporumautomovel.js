var  readlineSync  = require ( 'readline-sync' ) ; 

const  distancia5horas    = Number (readlineSync.question( 'Qual a velocidade media que foi percorrida em 5 horas? : ' ));
const  distancia8horas    = Number (readlineSync.question( 'Qual a velocidade media que foi percorrida em 8 horas? : ' ));
const  distancia12horas   = Number (readlineSync.question( 'Qual a velocidade mediaque foi percorrida em 12 horas? : ' ));


let velocidade5horas = distancia5horas/5
let velocidade8horas = distancia8horas/8
let velocidade12horas =distancia12horas/12

let kmh5 =distancia5horas*5
let kmh8 =distancia5horas*8
let kmh12 =distancia5horas*12


console.log('o carro percorrel em 5 horas '+kmh5+'km ,'+distancia5horas+'km/h');
console.log('o carro percorrel em 8 horas '+kmh8+'km ,'+distancia8horas+'km/h');
console.log('o carro percorrel em 12 horas '+kmh12+'km ,'+distancia12horas+'km/h');





var  readlineSync  = require ( 'readline-sync' ) ; 

const  distancia5horas    = Number (readlineSync.question( 'Qual a velocidade media que foi percorrida em 5 horas? : ' ));
const  distancia8horas    = Number (readlineSync.question( 'Qual a velocidade media que foi percorrida em 8 horas? : ' ));
const  distancia12horas   = Number (readlineSync.question( 'Qual a velocidade mediaque foi percorrida em 12 horas? : ' ));


let kmh5 =distancia5horas*5
let kmh8 =distancia5horas*8
let kmh12 =distancia5horas*12


console.log('o carro percorrel em 5 horas '+kmh5+'km ,'+distancia5horas+'km/h');
console.log('o carro percorrel em 8 horas '+kmh8+'km ,'+distancia8horas+'km/h');
console.log('o carro percorrel em 12 horas '+kmh12+'km ,'+distancia12horas+'km/h');



/*

Distância percorrida por um automóvel – Supondo que não haja acidentes ou
atrasos, a distância que um automóvel percorre numa rodovia pode ser
calculada com a seguinte fórmula:

Distância = velocidade × tempo

Sabendo disso, construa um algoritmo em que o usuário possa informar a
velocidade em que um carro está viajando e exiba as seguintes informações:
• A distância que o carro percorrerá em 5 horas;
• A distância que o carro percorre em 8 horas;
• A distância que o carro percorrerá em 12 horas.
*/

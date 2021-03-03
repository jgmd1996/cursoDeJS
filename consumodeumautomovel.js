var  readlineSync  = require ( 'readline-sync' ) ; 

const  milhas  = Number (readlineSync.question( 'quantas milhas percorrel? : ' ));
const  galoes  = Number (readlineSync.question('quantos galoes de gasolina forao usados? :'));

let milhasGaloes = milhas/galoes;
let galoesLitros = galoes*3.785;
let milhaKm  = milhas*1.60934;

console.log('Consumo do carro em milhas por galao :',milhasGaloes);
console.log('forao usandos '+galoesLitros+'litros de gasolina');
console.log('forao percorridos '+milhaKm+' km')


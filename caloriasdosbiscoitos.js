var  readlineSync  = require ( 'readline-sync' ) ; 

const  biscoitos  = Number (readlineSync.question( 'Quantos biscoitos forao comidos? : ' ));

let comidos = biscoitos*75

console.log('Calorias engeridas',comidos);
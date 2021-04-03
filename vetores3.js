var readlineSync = require('readline-sync');
let numeros = []

for(numero = 1 ; numero <= 12 ; numero++){
    numeroInformado = Number(readlineSync.question('Numero informado? '));
    
    numeros.push(numeroInformado)
    
}
numeros.sort(function(a,b){return a-b});
console.log(numeros)
numeros.sort(function(a,b){return b-a});
console.log(numeros)
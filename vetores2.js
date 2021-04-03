/*
var readlineSync = require('readline-sync');
let numeros = []
let calcular = 0;

for (media = 1; media <= 12; media++) {
    numeroInformado = Number(readlineSync.question('Numero informado? '));
    numeros.push(numeroInformado);
    tamanho = numeros.length;
    calcular = numeroInformado + calcular;
}
let valorDaMedia = calcular / tamanho;
for (resultado = 0; resultado < tamanho; resultado++) {
    console.log('numero informado ' + numeros[resultado] + ' media aritimetica ' + valorDaMedia + ' diferença em relaçao à média ', valorDaMedia - numeros[resultado])
}

*/
// modificaçao do exercicio 
var readlineSync = require('readline-sync');
let numeros = []
let calcular = 0;
do {
    numeroInformado = Number(readlineSync.question('Numero informado? '));
    if (numeroInformado != 0) {
        numeros.push(numeroInformado);
        tamanho = numeros.length;
        calcular = numeroInformado + calcular;
    }

} while (numeroInformado != 0 && tamanho <= 11)
     let valorDaMedia = calcular / tamanho;
    for (resultado = 0; resultado < tamanho; resultado++) {
        console.log('numero informado ' + numeros[resultado] + ' media aritimetica ' + valorDaMedia + ' diferença em relaçao à média ', valorDaMedia - numeros[resultado])
    }
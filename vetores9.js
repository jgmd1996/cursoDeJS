var readlineSync = require('readline-sync');
let numerosInformados = []
totalDeNumerosInformados = numerosInformados.length
soma = 0;
let maiorNumero =0;
let menorNumero = Number.MAX_SAFE_INTEGER;
do{
    numeros = Number(readlineSync.question('Qual numero dejesa informa ?'));
    if (numeros != -999) {
        numerosInformados.push(numeros)
        if (numeros) {
            soma += 1;
        }// para achar o maior numero
        if (indice > maiorNumero) {
            maiorNumero = numeros
        }
        //para achar o menor numero
        if (indice < menorNumero) {
            menorNumero = numeros
        }
    }
} while (numeros != -999 && soma <= 20)

console.log('Maior numero ',maiorNumero);
console.log('menor numero ',menorNumero);
console.log('Quantidades de numeros informados ',totalDeNumerosInformados);
console.log('media dos numeros informados ',soma/totalDeNumerosInformados);

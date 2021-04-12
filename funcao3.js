var readlineSync = require('readline-sync');

const metrosQuadrado = Number(readlineSync.question('Qual e o custo de um metro quadrado de construção(CUB)?'));

function calcularCub(metrosQuadrado) {
    return metrosQuadrado * 80 / 100
}
let cub = calcularCub(metrosQuadrado);

do {
    tipoDeCasa = readlineSync.question('Qual o tipo de casa "RA" "RB" "RC ou "RD"?');
} while (tipoDeCasa != 'RA' && tipoDeCasa != 'RB' && tipoDeCasa != 'RC' && tipoDeCasa != 'RD')

function tipoCasa(tipoDeCasa) {
    if (tipoDeCasa == 'RA') {
        return metrosQuadrado * 120 / 100
    } else if (tipoDeCasa == 'RB') {
        return metrosQuadrado * 105 / 100
    } else if (tipoDeCasa == 'RC') {
        return cub
    } else if (tipoDeCasa == 'RD') {
        return cub * 90 / 100
    }
}
let casa = tipoCasa(tipoDeCasa)

console.log('Ovalor do seguro vai ser de R$:'+casa +' por metro quadrado')

simOuNao = readlineSync.question('Gostaria de calcular o valor total do seguro digite "sim"!');
if (simOuNao == 'sim') {
    const metrosQuadradoTotal = Number(readlineSync.question('Quantos metros quadrados tem a casa??'));
    console.log('Valor Total do seguro R$:', metrosQuadradoTotal * casa)
}



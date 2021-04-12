var  readlineSync  = require ( 'readline-sync' ) ;

const compra = Number(readlineSync.question('Qual foi o valor da compra?'));

function inpostoEstadual(compra){
    return compra*4/100
}
let estadual = inpostoEstadual(compra)

function inpostoMunicipal(compra){
    return compra*2/100
}
let municipal = inpostoMunicipal(compra)

console.log('Valor da compra R$:',compra);
console.log('Inposto estadual R$:',estadual);
console.log('Imposto municipal R$:',municipal);
console.log('Inposto Total sobre a venda R$:',estadual+municipal);
console.log('Total da venda R$:',compra+estadual+municipal)

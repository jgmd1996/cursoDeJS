var readlineSync = require('readline-sync');

const impostoSobrePropriedade = Number(readlineSync.question('Qual o valor anul do imposto do predio?'));
let formaDePagamento = readlineSync.question('Como deseja pagar a "vista" ou "parcelado"?');
const ValorDoImpostos = imposto(impostoSobrePropriedade);
console.log('Valor a ser pago e de R$',ValorDoImpostos)

function imposto(impostoSobrePropriedade) {
    acharValorRealDoImovel = 60%impostoSobrePropriedade
    porcentagem = 9.64%acharValorRealDoImovel
    if (formaDePagamento == 'vista') {
        calc =acharValorRealDoImovel - 17%acharValorRealDoImovel
        return calc
    } else if (formaDePagamento == 'parcelado') {
        calc =acharValorRealDoImovel + 15%acharValorRealDoImovel
        return calc
    }
}
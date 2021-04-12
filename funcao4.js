var readlineSync = require('readline-sync');

let existeParcelaDoAltomovel = readlineSync.question('Existe parcela do altomovel se sim digite "sim" se nao ignora essa mensagem?');
let parcelaDoEmprestimo = 0;
if (existeParcelaDoAltomovel = 'sim') {
     parcelaDoEmprestimo = Number(readlineSync.question('Qual o valor da parcela do altomovel?'));
}


let valorDoSeguro = Number(readlineSync.question('Qual o valor do seguro do carro?'));
let valorDoOleo = Number(readlineSync.question('Qual o valor do oléo?'));
let valorDoPenel = Number(readlineSync.question('Qual o valor do penel?'));
let valorDaManutencao = Number(readlineSync.question('Qual o valor da manuntençao ?'));
const custoMensal = calcularCustoMensal(valorDoSeguro,valorDoOleo,valorDoPenel,valorDaManutencao,parcelaDoEmprestimo);
console.log('Custo mensal',custoMensal);
const custoAnual= calcularCustoAnual(valorDoSeguro,valorDoOleo,valorDoPenel,valorDaManutencao,parcelaDoEmprestimo);
console.log('Custo anual',custoAnual);

function calcularCustoMensal(valorDoSeguro,valorDoOleo,valorDoPenel,valorDaManutencao,parcelaDoEmprestimo){
    const somatorio = valorDoSeguro+valorDoOleo+valorDoPenel+valorDaManutencao+parcelaDoEmprestimo;
    return somatorio;
}

// function calcularCustoAnual(somatorio){
//     const somatorioAnual = somatorio*12;
//     return somatorioAnual;
// }

function calcularCustoAnual(valorDoSeguro,valorDoOleo,valorDoPenel,valorDaManutencao,parcelaDoEmprestimo){
    const valoresMensal = calcularCustoMensal(valorDoSeguro,valorDoOleo,valorDoPenel,valorDaManutencao,parcelaDoEmprestimo);
    const somatorioAnual = valoresMensal*12;
    return somatorioAnual;
}


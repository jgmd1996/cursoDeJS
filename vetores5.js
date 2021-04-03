var readlineSync = require('readline-sync');
let nome = []
let salarioHora = []
let tempoTrabalhadoDoFuncionario = []
let tamanho = []
let salariobruto = [];
let salarioLiquido = []
let porcentagem = []
let valorDescontado = []

do {
    // nome do enpregado
    nomeDoEmpregado = readlineSync.question('Qual o nome do enpregado? ');
    nome.push(nomeDoEmpregado);
    // salario do empregado por hora trabalhada
    salarioPorHora = Number(readlineSync.question('Qual o valor da hora do trabalhador(a)? '));
    salarioHora.push(salarioPorHora);
    // quantas horas forao trabalhadas 
    tempoTrabalhado = Number(readlineSync.question('Quantas horas forao trabalhadas '));
    tempoTrabalhadoDoFuncionario.push(tempoTrabalhado)
    //opçao para sair
    sair = Number(readlineSync.question('deseja finalizar o programa basta digitar "0"? '));
    // tamanho do vetor 
    tamanho = nome.length;
} while (sair != 0)

for (salarios = 0; salarios < tamanho; salarios++) {
    calculo = salarioHora[salarios] * tempoTrabalhadoDoFuncionario[salarios];
    salariobruto.push(calculo);
}
for (liquido = 0; liquido < tamanho; liquido++) {

    if (salariobruto[liquido] < 3000) {
        calculo1 = calculo * 10 / 100;
        calcular1 = calculo - calculo1;
        salarioLiquido.push(calcular1)
        porcentagem.push('10')
        desconto = calculo - calcular1;
        valorDescontado.push(desconto)

    } else if (salariobruto[liquido] >= 3000 && calculo < 5500) {
        calculo1 = calculo * 13 / 100;
        calcular1 = calculo - calculo1;
        salarioLiquido.push(calcular1)
        porcentagem.push('13')
        desconto = calculo - calcular1;
        valorDescontado.push(desconto)

    } else if (salariobruto[liquido] >= 5500 && calculo < 8000) {
        calculo1 = calculo * 16 / 100;
        calcular1 = calculo - calculo1;
        salarioLiquido.push(calcular1)
        porcentagem.push('16')
        desconto = calculo - calcular1;
        valorDescontado.push(desconto)

    } else if (salariobruto[liquido] >= 8000) {
        calculo1 = calculo * 20 / 100;
        calcular1 = calculo - calculo1;
        salarioLiquido.push(calcular1)
        porcentagem.push('20')
        desconto = calculo - calcular1;
        valorDescontado.push(desconto)

    }
    console.log('nome do enpregado ', nome[liquido])
    console.log('o valor da hora do trbalhador ', salarioHora[liquido])
    console.log('Salario bruto  ', salariobruto[liquido])
    console.log('porcentual de imposto descontado e de ' + porcentagem[liquido] + '%')
    console.log('Valor descontado ', valorDescontado[liquido])
    console.log('salario liquido ', salarioLiquido[liquido])
}
let soma1 = 0
let soma2 = 0
let soma3 = 0
let soma4 = 0
for (geral = 0; geral < tamanho; geral++) {
    tempoTrabalhadoDoFuncionario[geral]
    salariobruto[geral]
    valorDescontado[geral]
    salarioLiquido[geral]
    if (tempoTrabalhadoDoFuncionario || salariobruto || valorDescontado || salarioLiquido) {
        soma1 += tempoTrabalhadoDoFuncionario[geral]
        soma2 += salariobruto[geral]
        soma3 += valorDescontado[geral]
        soma4 += salarioLiquido[geral]

    }

}
console.log('Horas trabalhadas dos funcionarios :', soma1);
console.log('Total da folha de pagamento dos funcionarios :', soma2);
console.log('Total de inpostos :', soma3);
console.log('Pagamento liquido dos inpregados :', soma4);
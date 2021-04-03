var readlineSync = require('readline-sync');

let calcular =0;

do {
    // para sair do programa basta escrever sair em nome
    nome = readlineSync.question('Qual o nome do cliente? ');
    if (nome != 'sair') {
        codigo = Number(readlineSync.question('Qual o codigo do cliente? '));
        valorTotal = Number(readlineSync.question('Qual o valor total da compra? '));
        do {
            prestacoes = Number(readlineSync.question('Quantas prestaçoes deseja pagar? '));
            if (prestacoes < 2 || prestacoes > 36) {
                console.log('numero de prestaçoes invalido')
                console.log('prestaçoes aceitaveis de 2 a 36');
            }
        } while (prestacoes <= 2 || prestacoes >= 36)
        console.log(nome)
        console.log(codigo)
        console.log(valorTotal)
        let calcularValorPrestacao = valorTotal/prestacoes ;
        for (let exercicio18 = 1; exercicio18 <= prestacoes; exercicio18++) {
            calcular=calcularValorPrestacao+calcularValorPrestacao*1/100;
            if(calcularValorPrestacao >=1){
                console.log(calcular)
                
            }

        }

    }
} while (nome != 'sair')




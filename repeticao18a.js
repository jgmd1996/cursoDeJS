var readlineSync = require('readline-sync');


let valorTotal = Number(readlineSync.question('Qual o valor total da compra? '));
let prestacoes = Number(readlineSync.question('Quantas prestaçoes deseja pagar? '));
var valorPrestacao = 0;
let descontoDeJuros =0;
for (let exercicio18 = 1; exercicio18 <= 12; exercicio18++) {
    valorTotal=valorTotal-valorPrestacao
    valorPrestacao=valorTotal/prestacoes;
    

    //valorPrestacao =valorTotal/prestacoes;
    if (exercicio18) {
        var calcularjuros = 1%valorTotal
        
        
        console.log(valorTotal);
    }

}

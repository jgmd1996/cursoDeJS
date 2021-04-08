var readlineSync = require('readline-sync');

nome = []
telefone = []
soma = 0;

for (dados = 0; dados <= 1; dados++) {
    nomeDoCliente = readlineSync.question('Qual o nome do clente?');
    nome.push(nomeDoCliente)
    numeroDoCliente = Number(readlineSync.question('Qual numero do cliente?'));
    telefone.push(numeroDoCliente);
    tamanho = nome.length;
}

do{
const procuraDeCliente = readlineSync.question('Qual cliente gostaria de fazer a busca?');

    for (validar = 0; validar < tamanho; validar++) {

        if(nome[validar] == procuraDeCliente)
        console.log('nome :' + nome[validar] + ' telefone ', telefone[validar])
        soma += 1;
    }
    if(soma == 0){
        console.log('erro')
    }

    sair = readlineSync.question('para sair do programa basta digitar "sim" !');
}while(sair != 0)





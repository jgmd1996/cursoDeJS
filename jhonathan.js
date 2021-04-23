var readlineSync = require('readline-sync');

const quantidadeDeClientes = Number(readlineSync.question('quantos clientes tem'));
let clientes = [];

for (quantidade = 1; quantidade <= quantidadeDeClientes; quantidade++) {
    const nome = readlineSync.question('qual o nome');
    const endereco = readlineSync.question('qual o endeço?');
    const telefone = Number(readlineSync.question('qual o telefone'));

    let cliente = {
        nome: nome,
        endereco: endereco,
        telefone: telefone
    }
    clientes.push(cliente)
}

do {
    const busca = readlineSync.question('Gostaria de busca dados de um cliente especifico "sim" ou "nao"');
    if (busca != 'nao') {
        const buscaDoCliente = readlineSync.question('Qual o nome do cliente?');
        for (quantidade = 0; quantidade < clientes.length; quantidade++) {
            const cliente = clientes[quantidade];
            if (cliente.nome == buscaDoCliente) {
                console.log(cliente.nome);
                console.log(cliente.endereco);
                console.log(cliente.telefone);
            }else{
                console.log(buscaDoCliente,' nao consta no nosso banco de dados ')
            }
        }
    }
} while(busca != 'nao')



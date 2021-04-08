var readlineSync = require('readline-sync');

 nome =['gabriel','pedro']

 console.log(nome)
 //console.log(nome[pedro])
 //console.log(nome['pedro'])
 let nomeDoCliente = readlineSync.question('Qual o nome do clente?');
 if(nomeDoCliente == nome[1]){
     console.log('deu bom')
 }
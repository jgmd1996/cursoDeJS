var  readlineSync  = require ( 'readline-sync' ) ; 
//espera respostas
const  nome  = readlineSync.question( 'Qual o seu nome?: ' ) ;
const  endereco  = readlineSync.question( 'Informe seu endereço?: ' ) ;
const  cidade  = readlineSync.question( 'Informe a cidade onde voce reside?: ' ) ;
const  cep  = readlineSync.question( 'Informe o numero do seu cep?: ' ) ;
const  telefone  = readlineSync.question( 'Informe seu numero: ' ) ;
const  proficional  = readlineSync.question( 'Informe a sua atuaçao proficional: ' ) ;




console.log('nome da pessoa: ',nome);
console.log('endereço da pessoa',endereco);
console.log('cidade da pessoa',cidade);
console.log('cep da pessoa',cep);
console.log('telefone da pessoa',telefone);
console.log('atuaçao proficional da pessoa',proficional);



/*
Informações Pessoais – Crie um algoritmo que peça ao usuário para informar os
dados abaixo e, depois disso, os imprima na tela:
• Nome;
• Endereço, com cidade, estado e CEP;
• Número de telefone;
• Área de atuação profissional.
*/
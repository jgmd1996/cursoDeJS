var readlineSync = require('readline-sync');

let numerosDeConta =[5658845,4520125,7895122,8777541,8451277,1302850,8080152,4562555,5552012,5050552,7825877,1250255,1005231,6545231,3852085,7576651,7881200,4581002]
tamanho=numerosDeConta.length

const numeroInformadoPorCliente = Number(readlineSync.question('Qual numero d sua conta ?'));
let nao =0;
for(clien =0 ; clien < tamanho ; clien ++){
    if(numerosDeConta[clien] == numeroInformadoPorCliente){
        console.log('o numero e valido')
        nao+=1;
    }
}
if(nao == 0){
    console.log('numero invalido')
}







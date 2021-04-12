var  readlineSync  = require ( 'readline-sync' ) ; 

const  jogos  = Number (readlineSync.question( 'Quantos jogos forao comprados? : ' ));

let calculo =0;
let valorDaCompra = jogos*150;



if(jogos<=10){
    console.log('Numeros de jogos comprados :',jogos);
    console.log('Valor da compra R$:',valorDaCompra);
    console.log('Não ouve desconto ');
    console.log('Valor total a pagar R$;',valorDaCompra);

}else if(jogos >10  && jogos <=19){

    calculo = valorDaCompra*20/100;
    console.log('Numeros de jogos comprados :',jogos);
    console.log('Valor da compra R$:',valorDaCompra);
    console.log('seu descontofoi de R$:',calculo);
    console.log('Valor total a pagar R$;',valorDaCompra-calculo);

}else if(jogos >=20  && jogos <=49){

    calculo = valorDaCompra*30/100;
    console.log('Numeros de jogos comprados :',jogos);
    console.log('Valor da compra R$:',valorDaCompra);
    console.log('seu descontofoi de R$:',calculo);
    console.log('Valor total a pagar R$;',valorDaCompra-calculo);

}else if(jogos >=50  && jogos <=99){

    calculo = valorDaCompra*40/100;
    console.log('Numeros de jogos comprados :',jogos);
    console.log('Valor da compra R$:',valorDaCompra);
    console.log('seu descontofoi de R$:',calculo);
    console.log('Valor total a pagar R$;',valorDaCompra-calculo);

}else if(jogos >=100){

    calculo = valorDaCompra*50/100;
    console.log('Numeros de jogos comprados :',jogos);
    console.log('Valor da compra R$:',valorDaCompra);
    console.log('seu descontofoi de R$:',calculo);
    console.log('Valor total a pagar R$;',valorDaCompra-calculo);

}

/*
Uma loja de jogos vende cada jogo por R$ 150.00, mas concede descontos
conforme a quantidade comprada, conforme a tabela a seguir:
Quantidade de jogos comprados Desconto
10–19 20%
20–49 30%
50 a 99 40%
100 ou mais 50%
Crie um algoritmo que leia o número de jogos comprados, o valor original da
compra, o valor do desconto (se houver) e o valor total da compra após o desconto.

*/
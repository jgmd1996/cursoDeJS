var  readlineSync  = require ( 'readline-sync' ) ;


let prestacao
let valorJuros



do{
     nome                = readlineSync.question( 'Qual o seu nome ' );
     numerDeConta        = Number(readlineSync.question( 'Qual o numero do seu codigo ' ));
     valorTotalDaCompra  = Number(readlineSync.question( 'Qual o valor total da compra? ' ));
     
    do{
      prestacao= Number(readlineSync.question( 'Digite a quantidade de prestaçoes entre 2 e 36: ' ));
    }while(prestacao < 2 || prestacao >36);
     console.log('Nome do cliente',nome);
     console.log('codigo do cliente',numerDeConta);
     console.log('Valor total da compra ', valorTotalDaCompra);
     var valorPrestacao = valorTotalDaCompra/prestacao;
     console.log('Valor da prestação: ',valorPrestacao);
     
              for(let ano = 1 ; ano <= 12; ano ++){

                valorJuros= Number(readlineSync.question( 'qual o valor da prestaçao : ',ano));
  
                 console.log(valorJuros)
                 if(valorJuros){
                   valorJuros+=1%
                   console.log('Valor a ser pago no '+ano+' mes')
                 }
     
               }


     

     sair                = Number(readlineSync.question( 'SE deseja sair digite 0' ));
     

}while(sair != 0);




// tem que ser corrigido

               

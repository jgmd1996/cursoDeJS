var  readlineSync  = require ( 'readline-sync' ) ; 

const  valordaCompra  = Number (readlineSync.question( 'Qual o valor da peça? : ' ));
 
   let calcular =0;
   let resultado = 0;
  

if (valordaCompra <= 50){
    calcular=valordaCompra*45/100;
    resultado =calcular+valordaCompra;
   
    
}else if(valordaCompra>50){
    calcular=valordaCompra*30/100;
    resultado =calcular+valordaCompra;
   

}

console.log('Valor da venda',resultado);

/*
Um brechó revende produtos usados, e fixa o preço de venda de cada produto
conforme o valor de sua aquisição: se o preço de aquisição de um produto é menor
do de R$ 50.00, ele deve ser vendido por um preço 45% maior; caso contrário, o
lucro será de 30%. Sabendo disso, construa um algoritmo que leia o valor de
aquisição de um produto e mostre o seu valor de venda.
*/
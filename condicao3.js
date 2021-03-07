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
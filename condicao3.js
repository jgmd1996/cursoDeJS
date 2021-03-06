var  readlineSync  = require ( 'readline-sync' ) ; 

const  valordaCompra  = Number (readlineSync.question( 'Qual o valor da peça? : ' ));
 
    let caucular45 =valordaCompra*45/100;
    let resultado45 =caucular45+valordaCompra;
    let caucular30 =valordaCompra*30/100;
    let resultado30 =caucular30+valordaCompra;


if (valordaCompra <= 50){

    console.log('Valor da venda',resultado45);
    
}else if(valordaCompra>50){
    console.log('Valor da venda',resultado30);

}
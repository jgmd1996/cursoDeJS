var  readlineSync  = require ( 'readline-sync' ) ; 

const   vendas   = Number ( readlineSync.question( ' Quantas vendas forao realizadas pelo funcionario?: ' ));

if(vendas <= 30){
    console.log('Bonus de R$:250.00')
}else if(vendas >= 30 && vendas <= 80){
    console.log('Bonus de R$:500.00')
}else if(vendas > 80 && vendas < 200){
    console.log('Bonus de R$:.1.000.00')
}else if(vendas >= 200){
    console.log('Bonus de R$:2.000,00')
}
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

/*
Uma loja deseja recompensar os seus empregados de acordo com o número de
vendas que eles realizaram num determinado mês. Crie um algoritmo que leia o
número de vendas de um empregado e calcule o seu bônus, conforme a seguir:

Ministério da Educação
a. Se o número de vendas for menor que 30, o bônus é de R$ 250,00;
b. Se o número de vendas for maior que 31 e menor que 80, o bônus é de R$
500,00;
c. Se o número de vendas for maior que 80 e menor que 200, o bônus é de
R$ 1.000,00;
d. Se o número de vendas for 200 ou maior, o bônus é de R$ 2.000,00.

*/
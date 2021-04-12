var  readlineSync  = require ( 'readline-sync' ) ; 

const  temperatura  = Number (readlineSync.question( 'Qual a teperatura?: ' ));

if(temperatura <= 15){
    console.log('Muito frio!')
}else if(temperatura >= 16 && temperatura <= 22.9){
    console.log('frio!')
}else if(temperatura >= 23.1 && temperatura <= 25.9){
    console.log('Agradavel!')
}else if(temperatura >= 26.1 && temperatura <= 30){
    console.log('Quente!')
}else if(temperatura >= 31){
    console.log('muito quente!')
}else if(temperatura == 23){
    console.log('Entre frio e quente!')
}else if(temperatura == 26){
    console.log('Entre agradav e quente!')
}

/*
Faça um algoritmo para ler a temperatura atual e conforme leitura, imprima o
resultado de acordo com a tabela abaixo.

Temperatura Resultado

até 15o Muito frio
de 16o a 23o Frio
de 23o a 26o Agradável
de 26o a 30o Quente
acima de 31o Muito quente

*/
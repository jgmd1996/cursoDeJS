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
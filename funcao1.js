var  readlineSync  = require ( 'readline-sync' ) ; 

const calcular = Number (readlineSync.question( 'Qual calculo gostaria de fazer km digite "1" para fazer o calculo de milhas digite "2"? : ' ));


function kmOuMilhas(calcular){  
if ( calcular == 1){
    let km = Number(readlineSync.question('Qual a distancia gostaria de calcular em km par milhas'));
    return km*0.6214;
}else if(calcular == 2){
    let milhas = Number(readlineSync.question('Qual a distancia gostaria de calcular em milhas par km'));
    return milhas*1.0
}
}
let res = kmOuMilhas(calcular)
if ( calcular == 1){
    console.log('Resultado em Km',res)
}else if(calcular == 2){
    console.log('Resultado em milhas',res)
}

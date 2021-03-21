var  readlineSync  = require ( 'readline-sync' ) ;

const numeros  = Number(readlineSync.question( 'Qual numero da taboada gostaria de calcular??: ' ));
const numeros1  = Number(readlineSync.question( 'Ate que numero gostaria de fazer o calculo da tabuada?: ' ));


for(let taboada = 1 ; taboada <= numeros1; taboada ++){

    console.log(taboada+' X '+numeros+' = ',taboada*numeros);
}


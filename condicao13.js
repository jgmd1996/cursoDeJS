var  readlineSync  = require ( 'readline-sync' ) ; 

console.log('Para fazer calculo de elevaçao ao quadrado digite 1');
console.log('Para fazer calculo de raiz quadrada digite 2');
console.log('Para fazer calculo de seno digite 3');
console.log('Para fazer calculo de exponencial digite 4');
console.log('sair do programa digite 0');

const  opcao  = Number (readlineSync.question( 'qual opçao  voce deseja: ' ));



let calculo = 0;

if(opcao == 1){
    let base = Number (readlineSync.question( 'qual o numero da base: ' ));
    let expoente = Number (readlineSync.question( 'qual o numero do expoente: ' ));
    calculo = Math.pow(base, expoente);
    console.log(calculo);
}else if(opcao == 2){
    let  valor  = Number (readlineSync.question( 'qual valor  voce deseja fazer o calculo?: ' ));
    var raizQuadrado = Math.sqrt(valor);
    console.log(raizQuadrado);
}else if(opcao == 3){
    let  valor  = Number (readlineSync.question( 'qual valor  voce deseja fazer o calculo?: ' ));
    var  seno = Math.sin(valor);
    console.log(seno);
}else if(opcao == 4){
    let  valor  = Number (readlineSync.question( 'qual valor  voce deseja fazer o calculo?: ' ));
    var exponencial = Math.exp(valor);
    console.log(exponencial);
}else if(opcao == 0){
    
    console.log('Voce saiu do programa');
}else{
    console.log('Opaçao não valida')
}

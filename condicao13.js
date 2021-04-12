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

/*
Escreva um algoritmo que leia um número e exiba as seguintes opções na tela,
para o usuário escolher uma operação:
1. Elevar ao quadrado;
2. Raiz quadrada;
3. Seno;
4. Exponencial.

Depois que o usuário escolher uma opção digitando um número entre 1 e 4, efetue
a função matemática correspondente. O algoritmo deve verificar se a escolha
fornecida pelo usuário é válida (ou seja, é um número entre 1 e 4); se não for,
então deverá emitir uma mensagem de erro e finalizar.
Assumindo que a variável que você utilizará para armazenar o número que o
usuário informar seja chamada de vlNumero, as seguintes funções para lhe
permitem calcular as funções pedidas:

• sqr(vlNumero) para elevar ao quadrado;
• sqrt(vlNumero) para tirar a raiz quadrada;
• sin(vlNumero) para calcular o seno;
• exp(vlNumero) para calcular uma exponencial.

Após você criar seu algoritmo, modifique-o para incluir a seguinte opção no menu
do usuário:
0. Sair do programa.

*/

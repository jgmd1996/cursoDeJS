var  readlineSync  = require ( 'readline-sync' ) ;

console.log('Escolha de 0 10 Tente a sorte')

const  numero   = Number (readlineSync.question( 'numero da sua escolha?: ' ));
let dia   = Math.floor(Math.random()*10);

if(dia == numero){
    console.log("voce ganho parabeins com o numero ",numero);
}else if(numero > dia){
    console.log('resultado :',dia);
    console.log('Seu palpite :',numero);
    console.log('Palpite alto');
}else if(numero < dia){
    console.log('resultado :',dia);
    console.log('Seu palpite :',numero);
    console.log('Palpite a baixo');
}

/*
Crie um algoritmo para um jogo de adivinhação, onde o usuário tenta adivinhar
um número aleatório gerado pelo computador. Esse número aleatório é inteiro e
não negativo, e deve ser escolhido dentro de uma faixa estabelecida pelo usuário
(por exemplo, o usuário pode estipular que esse número varie entre 0 e 10 ou entre
22 e 48, por exemplo). Após o usuário tentar adivinhar qual foi o número gerado,
o algoritmo deve escrever esse número e dizer se indicar se o palpite do jogador
estava correto, muito alto ou muito baixo.
Dica: Para gerar um número aleatório maior ou igual a zero e menor do que “x”,
utilize a função random(x).

*/
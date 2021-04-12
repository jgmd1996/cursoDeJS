var  readlineSync  = require ( 'readline-sync' ) ; 

const  livro  = Number (readlineSync.question( 'Quantos livros forao comprados? : ' ));

let calculo = 0;

if (livro == 0){
    console.log('o cliente nao compro o livro nao ganha 0 ponto')
}else if (livro == 1){
    console.log('o cliente compro 1 livro ganha 5 ponto')
}else if (livro == 2){
    console.log('o cliente compro 2 livro ganha 15 ponto')
}else if (livro == 3){
    console.log('o cliente compro 3 livro ganha 30 ponto')
}else if (livro == 4){
    console.log('o cliente compro 4 livro ganha 60 ponto')
}else{
     console.log('Numero de compra de livros nao ceitavel!')
}

/*
O programa de fidelidade de uma determinada livraria premia seus clientes de
acordo com o número de livros comprados a cada mês. Os pontos são atribuídos
da seguinte forma:
• Se um cliente comprar 0 livros, ele ganhará 0 pontos.
• Se um cliente comprar um livro, ele ganhará 5 pontos.
• Se um cliente comprar dois livros, ele ganhará 15 pontos.
• Se um cliente comprar 3 livros, ele ganhará 30 pontos.
• Se um cliente comprar 4 ou mais livros, ele ganhará 60 pontos.
Crie um algoritmo que leia o número de livros comprado por um usuário e exiba
o número de pontos correspondentes.

*/
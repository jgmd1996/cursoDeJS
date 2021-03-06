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
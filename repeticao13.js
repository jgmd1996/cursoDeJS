var  readlineSync  = require ( 'readline-sync' ) ;

let valorProduto = Number(readlineSync.question( 'Qual o valor do produto no  :?'));
console.log('Valor da 1 semana :',valorProduto);
for(let mes = 2; mes <= 6 ; mes ++){
     
    calcular5Porcento =valorProduto*5/100;
    valorProduto= valorProduto-calcular5Porcento
    console.log('Valor da '+mes+' semana :',valorProduto)

   
}




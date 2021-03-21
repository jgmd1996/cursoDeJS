var  readlineSync  = require ( 'readline-sync' ) ;

let valorAnual  = Number(readlineSync.question( 'Qual o valor da faculdade anualmente??: ' ));
let porcentagem  = Number(readlineSync.question( 'Qual a taxa de inflação que deve ser aplicada a cada ano??: ' ));


let aumento= 0;

for(let ano = 1 ; ano <= 10; ano ++){
    porcentagem+=0.5;
    aumento=valorAnual*porcentagem/100;
    valorAnual+=aumento;


    console.log(valorAnual)
   
}

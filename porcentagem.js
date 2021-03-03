var  readlineSync  = require ( 'readline-sync' ) ; 

const  valor  = readlineSync.question( 'quanto foi vendido esse ano?: ' ) ;
const  porcentagem = readlineSync.question('quantos % gostaria de calcular ');

let resultado = valor*porcentagem/100 ;


console.log('taltal de vendas = ',valor);
console.log('o desconto foi de :',porcentagem+'%');
console.log('Resultado do calculo foi de :',resultado);
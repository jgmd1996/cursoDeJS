var  readlineSync  = require ( 'readline-sync' ) ; 

const  valorCompra    = Number (readlineSync.question( 'Qual e o valor da compra? : ' ));

let impostoEstadual  = valorCompra*2/100;
let impostoMunicipal = valorCompra*4/100;
let somaInpostos = impostoMunicipal+impostoEstadual+valorCompra;


console.log('Valor da compra: '+valorCompra+'R$');
console.log('O valor cobrado de inposto Estadual sobre a venda foi de  2%: '+impostoEstadual+'R$');
console.log('O valor cobrado de inposto Municipal sobre a venda foi de 4% : '+impostoMunicipal+'R$');
console.log('Iposto total sobre as venda e o total R$',somaInpostos);
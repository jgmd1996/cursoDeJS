var  readlineSync  = require ( 'readline-sync' ) ; 

const  valorCompra    = Number (readlineSync.question( 'Qual e o valor da compra? : ' ));

let impostoEstadual  = valorCompra*2/100;
let impostoMunicipal = valorCompra*4/100;
let somaInpostos = impostoMunicipal+impostoEstadual+valorCompra;


console.log('Valor da compra: '+valorCompra+'R$');
console.log('O valor cobrado de inposto Estadual sobre a venda foi de  2%: '+impostoEstadual+'R$');
console.log('O valor cobrado de inposto Municipal sobre a venda foi de 4% : '+impostoMunicipal+'R$');
console.log('Iposto total sobre as venda e o total R$',somaInpostos);

/*
Imposto sobre vendas – Crie um algoritmo que solicite ao usuário que insira o
valor da compra. O programa deve calcular os impostos de vendas estadual e
municipal. Suponha que o imposto estadual sobre vendas seja de 4% e o imposto
estadual sobre vendas seja de 2%. O programa deve exibir o valor da compra, o
imposto estadual sobre vendas, o imposto municipal sobre vendas, o imposto
total sobre vendas e o total da venda (que é a soma do valor da compra mais o
imposto total sobre vendas).
Lembrete: 2% =
2
100
= 0,02 e 4% =
4
100
= 0,04

*/
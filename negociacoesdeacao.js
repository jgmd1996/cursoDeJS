var  readlineSync  = require ( 'readline-sync' ) ; 

const  Acoes  = Number (readlineSync.question( 'Quantas açoes forao compradas? : ' ));
const  valor  = Number (readlineSync.question( 'Valor das açoes? : ' ));
const  vendido  = Number (readlineSync.question( 'Valor de quanto foi vendido as açoes? : ' ));

let valorAcoes = Acoes*valor;
let Porcentagemacoes =valorAcoes*2/100;
let valorCompraTotal =valorAcoes+Porcentagemacoes;
let valorDaAcoesVendias = vendido*Acoes;
let PorcentagemDaVendaDasAcoes =valorDaAcoesVendias*2/100;

//cauculo da compra das açoes
 let calculo1 = valorAcoes+Porcentagemacoes;

 //cauculo da venda das açoes

let calculo2 = valorDaAcoesVendias-PorcentagemDaVendaDasAcoes;

//cauculo to total de ganho 

let ganhoLiquido = calculo2-calculo1;



console.log('Quantia que foi paga :',valorAcoes,);
console.log('Comisao do corretor na compra das açoes:',Porcentagemacoes);
//console.log('Gasto total na compra das açoes :',valorCompraTotal);
console.log('Valor da venda das açoes :',valorDaAcoesVendias);
console.log('Comisao do corretor na venda das açoes',PorcentagemDaVendaDasAcoes);
console.log('ganho liquido :',ganhoLiquido);







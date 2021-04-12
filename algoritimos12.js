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



/*
Negociação de Ações – No mês passado, José comprou e vendeu algumas ações
das Lojas Pedroso S.A., conforme detalhado abaixo:
a. No total, foram compradas 1000 ações. Naquele momento, José pagou
R$ 32,87 por cada ação;
b. Pela transação que efetuou, José teve que pagar uma taxa de corretagem
de 2% sobre o valor pago pelas ações;
c. Duas semanas depois, José vendeu todas as ações que adquirira por R$
33,92 cada uma;
d. Para poder efetuar a venda, José teve que pagar novamente uma
comissão de 2% do valor da transação.

Crie um algoritmo que imprima na tela as seguintes informações:

a. A quantia que José pagou pelas ações;
b. O valor da comissão que José pagou ao seu corretor quando ele comprou
as ações;
c. A quantia pela qual José vendeu as ações;
d. A quantia de comissão que José pagou ao seu corretor quando ele vendeu
as ações;
e. Mostre a quantia que José ganhou ao vender as ações e pagar o corretor.
Modificação: Após construir esse algoritmo, modifique-o para que o usuário possa
fornecer as seguintes informações:

a. A quantidade de ações compradas;
b. O valor de cada ação no momento da compra;

Ministério da Educação

c. O valor percentual da comissão na compra;
d. O valor de cada ação no momento da venda;
e. O valor percentual da comissão na venda.

A partir disso, imprima na tela as mesmas informações como pedido acima.

*/






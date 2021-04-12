var  readlineSync  = require ( 'readline-sync' ) ; 

const  adulto  = Number (readlineSync.question( 'Quantas tickets de adulto? : '));
const  crianca = Number (readlineSync.question('Quantas tickets de criança? :'));

let precoAdulto = adulto*20;
let precoCrianca = crianca*12;
let valorTotal =precoAdulto+precoCrianca;

//modificaçao do exercicio
let custoAdualto = adulto*5.35;
let custoCrianca = crianca*7.10;
let lucroliquidoAdualto = precoAdulto-custoAdualto;
let lucroliquidocriança = precoCrianca-custoCrianca;



console.log('O cliente deve pagar '+precoAdulto+'R$ pelos '+adulto+' ticket de refeiçao para adultos e '+precoCrianca+'R$ pelos '+crianca+' tickets de refeiçao para crianças totalizando '+valorTotal+'R$');
//modificaçao do exercicio

console.log('O cliente deve paga pela refiçao dos adualtos '+precoAdulto+'R$');
console.log('Lucro liquido das refeiçoes dos adultos '+lucroliquidoAdualto+'R$');

console.log('O cliente deve paga pela refiçao das crianças '+precoCrianca+'R$')
console.log('Lucro liquido das refeiçoes das crianças '+lucroliquidocriança+'R$');

/*
Jantar Beneficente – O Clube Verde e Cor-de-Rosa está realizando um jantar
beneficente para arrecadar fundos para uma instituição filantrópica. O preço é
de R$ 20,00 para adultos e R$ 12,00 para crianças. Para auxiliar a pessoa que irá
trabalhar no caixa que vende os tickets para o jantar, escreva um algoritmo que
peça ao usuário o número de refeições de cada tipo (adulto ou criança) que um
cliente deseja comprar e exiba o total referente somente às refeições de adultos,
somente às de crianças e, por fim, a todas as refeições. Por exemplo, no caso de
um cliente que compre 2 tickets para adultos e 4 para crianças, a saída do
algoritmo seria um texto como “O cliente deve pagar R$ 40,00 pelos 2 tickets de
refeição para adultos e R$ 48,00 pelos 4 tickets de refeição para crianças,
totalizando R$ 88,00”.
Modificação: após criar esse algoritmo, modifique-o para considerar o lucro
obtido. Para isso, considere que os custos para produzir uma refeição de adulto
e de criança seja de R$ 5,35 e R$ 7,10, respectivamente. Quando o algoritmo
calcular quanto o cliente deve pagar, deverá exibir tamém o lucro total para cada
tipo de refeição e o lucro total geral.

*/
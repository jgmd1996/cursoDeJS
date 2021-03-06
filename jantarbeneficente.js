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
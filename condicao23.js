var  readlineSync  = require ( 'readline-sync' ) ; 

const   orcamento   = Number ( readlineSync.question( ' qual o valor do orçamento?: ' ));
const   cliente     =  readlineSync.question( ' Nome do cliente?: ' );
console.log('Escolha qual o tipo de madeira');
console.log('angelin');
console.log('pinus')
const   madeira    = readlineSync.question( ' qual o tipo de madeira?: ' );
const   caracteres = Number ( readlineSync.question( ' Qual o numero de carcteres damensagem: ' ));
console.log('escolha um ipo de cor');
console.log('branco')
console.log('preto')
console.log('dourado')
const   cor       =  readlineSync.question( ' Qual cor dejesa printa?: ' );

let calcular = 0;
let branco = 0;
let preto = 0;
let dourado = Number(60);
let angelin = Number(450);
let pinus = Number(300);

console.log('Orçamento inicial R$:',orcamento)
console.log('Nome do cliente ',cliente);

if(madeira == 'pinus'){
    console.log('Orcamento para a placa de pinus e de R$:',pinus);
}else if(madeira == 'angelin'){
    console.log('Orcamento para a placa de angelins e de R$:',angelin);
             if(caracteres <= 12){
                console('Orçamento sem nenhum adicional para caracteres!')
             }else if(caracteres >12){
                 calcular = (caracteres-12)*15;
                 console.log('Orçamento para cada caracteres adicionais  de ',calcular);
                 if(cor == 'dourado'){
                     console.log('Orcamento pra cor dourada e de ',dourado)
                 }else{
                     console.log('Nenhum adicional por cor');
                 }
             }
}else{
    console.log('tipo de material não aceitavel');
}


/*
Um carpinteiro esculpe placas personalizadas para estabelecimentos comerciais e
deseja um programa que faça orçamentos das placas que produz, considerando as
seguintes informações:
a. O valor mínimo de qualquer placa é de R$ 300,00;
b. Placas de angelim custam R$ 150,00 adicionais, mas placas de pinus não
possuem nenhum custo extra;
c. Frases com até 12 caracteres estão incluídas no valor mínimo; para frases
maiores, são cobrados R$ 15,00 por caractere;
d. Para placas com dizeres brancos ou pretos não se cobra adicional, mas se
ele contiver letras douradas, cobra-se R$ 60,00 a mais.
Baseado nessas informações, construa um algoritmo que leia o número de um
orçamento, o nome do cliente, tipo de madeira (angelim ou pinus), número de
caracteres da mensagem e a cor dos caracteres (branco, preto ou dourado). Ao
final, imprima todos os dados de entrada e o preço da placa orçada.
Após construir esse este algoritmo, tente modificá-lo para que o usuário informe
a mensagem que deverá ser esculpida ao invés do número de caracteres dessa
mensagem. Assim, para que o orçamento seja emitido, o próprio algoritmo deverá
contar quantos caracteres a mensagem contém, o que pode ser feito com a função
length. Por exemplo, se você armazenar a mensagem numa variável chamada
strMensagem, o número de caracteres será dado por length(strMensagem).

*/

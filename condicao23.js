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


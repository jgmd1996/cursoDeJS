var readlineSync = require('readline-sync');

let mesesDoAno  =['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
let indicePluviometrico =[]
let valores= []
let soma =0;
let maiorNumero =0;
let maiorMes ='';
let menorNumero = Number.MAX_SAFE_INTEGER;
let menorMes = '';
tamanho= mesesDoAno.length
for(milimetros = 0 ; milimetros <12 ; milimetros++){

    indice = Number(readlineSync.question('Qual o indece pluviométrico do més '+mesesDoAno[milimetros]+'?'));
    indicePluviometrico.push(indice)
    soma+=indice;
    // para achar o maior numero
    if(indice > maiorNumero){
        maiorNumero=indice
        maiorMes= mesesDoAno[milimetros]
    }
    //para achar o menor numero
    if(indice < menorNumero){
        menorNumero=indice
        menorMes=mesesDoAno[milimetros]
    }
    
}

console.log(soma)

for(resultado = 0; resultado <12 ;resultado ++){
   console.log( mesesDoAno[resultado],indicePluviometrico[resultado]);
   
}
console.log('Maior més '+maiorMes+' maior numero ',maiorNumero);
console.log('Menor més '+menorMes+' menor numero ',menorNumero);
console.log('Media de precipitaçoes :',soma/tamanho);









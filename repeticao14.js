
// primeira parte do exercicio exercicio a
var  readlineSync  = require ( 'readline-sync' ) ;

let anos = Number(readlineSync.question( 'Por quanto anos o participante imagina que ainda deve trabalhar antes de se aposentar?  :'));
let depositos = Number(readlineSync.question( 'Qual o valor que o participante conseguira depositar anuamente em sua conta?  :'));
let calcular = 0;

for(let ano = 1; ano <= anos ; ano ++){
    calcularDepositos = depositos*9/100;
    depositos=depositos+calcularDepositos
    if(ano){
       
        calcular+= depositos
    
    
    console.log('Valor do rentabilidade do  '+ ano +' ano :',calcular);
    
    }
   
}

// questao b do exercicio

var  readlineSync  = require ( 'readline-sync' ) ;
let saque = Number(readlineSync.question( 'Qual o valor que  e sacado anualmente apos a aposentadoria  ?  :'));

let calcularDescontoAposentado =0;
let subitracaoDeSaque = 0;
let porcetagemDeSaque = 0;

if(saque < calcular){

        for(let saquePos = 1; saquePos <= 40 ; saquePos ++){
         calcular+=calcular*9/100-saque;
    
        if(calcular > 0){
            
            console.log('saque realizado no mes '+saquePos+' resulto',calcular)
         }
  
        }
}else if(saque > calcular){
    console.log('saldo indosponivel para saque ');
    console.log('valor contida no seu banco e de R$:',calcular)
}

console.log('Fim do programa');





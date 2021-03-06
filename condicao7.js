var  readlineSync  = require ( 'readline-sync' ) ; 

const  sms  = Number (readlineSync.question( 'Quantas mensagens forao mandadas? : ' ));

let calculo = 0;

if (sms <= 60){
    calculo = calculo+5;
    console.log('total de mensagens que forao envidas :',sms)
    console.log('Total da conta sem inpostos R$:',calculo);
    console.log('Valor do inposto',calculo*12/100);
    console.log('total a pagar R$:',(calculo*12/100)+calculo);
}else if (sms > 60 && sms <= 180){
    calculo= (sms-60)*0.05+5;
    console.log('total de mensagens que forao envidas :',sms)
    console.log('Voce ultrapasso as primeiras 60 mensagens que estao inclusas no plano basico sera cobrado R$:0,05 por cada mensagem a mais');
    console.log('total a pagar por ultrapassar o limite de sms R$:',(sms-60)*0.05);
    console.log('total dos inpostos',calculo*12/100);
    console.log('total da conta sem inpostos R$:',(sms-60)*0.05+5);
    console.log('total a pagar com inposto R$:',(calculo*12/100)+calculo);
}else if (sms > 180 ){
    calculo= (sms-180)*0.10+5;
    console.log('total de mensagens que forao envidas :',sms)
    console.log('Voce ultrapasso as primeiras 60 mensagens que estao inclusas no plano basico sera cobrado R$:0,10 por cada mensagem a mais');
    console.log('total a pagar por ultrapassar o limite de sms R$:',(sms-180)*0.10);
    console.log('total dos inpostos',calculo*12/100);
    console.log('total da conta sem inpostos R$:',(sms-180)*0.10+5);
    console.log('total a pagar com inposto R$:',(calculo*12/100)+calculo);
}

console.log('De longe esse foi o mais dificil ate agora');

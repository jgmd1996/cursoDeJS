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


/*
Uma certa operadora de telefonia móvel cobra R$ 5,00 mensais pelo seu plano
básico de transmissão de SMS (mensagens de texto), sendo que taxas adicionais
são cobradas conforme as regras abaixo:
a. As primeiras 60 mensagens estão incluídas no plano básico;
b. Se o usuário mandar mais de 60 mensagens, cada mensagem adicional
custará R$ 0.05, até o limite de 180 mensagens;
c. Acima de 180 mensagens, o valor de cada uma delas passa a R$ 0,10;
d. A soma dos impostos estaduais e federais amonta a 12% do valor de cada
fatura.
Com base nessas informações, crie um algoritmo para ler o número total de
mensagens enviadas por um usuário. Ao final, calcule o valor da conta e mostre
todos os dados, incluindo o valor da conta com e sem impostos.

*/
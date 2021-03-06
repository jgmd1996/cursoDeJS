var  readlineSync  = require ( 'readline-sync' ) ; 

const  kilosgramas  = Number (readlineSync.question( 'Informe o peso em kg, exenplo:1.5? : ' ));

let calculo = 0;

if (kilosgramas <= 0.5){
    console.log('preço da encomenda R$:1,10')
}

else if (kilosgramas > 0.5 && kilosgramas <= 2.0){
    console.log('preço da encomenda R$:2,20')
}

else if (kilosgramas > 2.0 && kilosgramas < 10.0){
    console.log('preço da encomenda R$:3,70')
}

else if (kilosgramas >= 10.0){
    calculo = 5.0+3.8;
    console.log('preço da encomenda R$:5,00 + R$:3,80 pelo peso que ultrapassa 10kg');
    console.log('Total a pagar R$:',calculo);
}
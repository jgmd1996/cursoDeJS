var  readlineSync  = require ( 'readline-sync' ) ;
let valorJuros = 0;
let valorJuros1 = 0;
let valorJuros10 = 0;
let valorTotalJuros = 0;


for(let ano = 2 ; ano <= 12; ano ++){

    valorJuros= Number(readlineSync.question( 'qual o valor da prestaçao : ',ano));
    valorJuros1 += (valorJuros*1/100)+ valorJuros;
    valorJuros10 +=valorJuros1*10/100;
     
     if(valorJuros){
       
        valorJuros= valorJuros1-valorJuros10;    
      
       
        console.log('Valor a ser pago no mes e de ',valorJuros);
     }

 
    
}

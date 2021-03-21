var  readlineSync  = require ( 'readline-sync' ) ;

let numero = 0;
let soma = 0;
let media = 0;

      console.log('Cso deseje sair do programa digite numeros abaixo de "0"')
do{
    numero  = Number(readlineSync.question( 'Digite um numero,' ));
         
         if(numero >= 0){
                soma+=numero;
                media++
                 
            }else if (numero <0){
                console.log('fim do programa');
                console.log('Somatora dos numeros',soma);
                console.log('Media',media/soma);
                console.log('VAlor minimo 0',);
                console.log('Valor maximo ',soma);
                console.log('SAiu do programa')
            }
            
         
}while(numero > 0 );

        
         

        
 

      


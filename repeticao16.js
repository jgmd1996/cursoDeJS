var  readlineSync  = require ( 'readline-sync' ) ;


voto =0;
sair =0;

do{
  sair  = Number(readlineSync.question( 'deseja nos avaliar o filme digite 1 ou qualquer outro numero? ' ));
  //SE deseja sair digite digite "1234556781"
  

   if(sair != 123456781){
    
   do{
     console.log('Avalie o filme entre 0 e 4')
     voto  = Number(readlineSync.question( 'Qual sua avaliaçao do filme? ' ));
      if(voto < 0 || voto > 4){
        for(vamos = 1; vamos < 4;vamos++){
         sair+=1;
         console.log('Avaliaçao invalida por favor nos  avalie novamente entre 0 e 4')
         voto  = Number(readlineSync.question( 'Qual sua avaliaçao do filme? ' ));
                  if(vamos == 3){
                   console.log('avaliaçao invalida')
                   console.log('Proximo expectador')
                  }
        }
      }


    

   }while(voto < 0 || voto >4);
   
  
   console.log('Avaliaçao do expectador: ',voto);
   console.log('obrigado por sua avaliçao ')
   console.log('proximo expectador')
   
    
  }
}while(sair != 123456781);
console.log('fim do programa: ');
var  readlineSync  = require ( 'readline-sync' ) ;

let altura = 0;
let sexo = 0;


// Medias de altura do sexo masculino
let alturaMasculinoAcima  = 0;
let alturaMasculinoAbaixo = 0;
// medias de altura Feminino
let alturaFemininoAcima  = 0;
let alturaFemininoAbaixo = 0;
// sexo masculino
let sexoMaculino = 0;
// sexo Feminino
let sexoFeminino = 0;
console.log('para sair basta digitar qualquer numero abaixo de 0 em altura ')
do{
    sexo  = readlineSync.question( 'Descreva seu sexo com "m" para mascolino e "f" para feminino ')
    altura  = Number(readlineSync.question( 'Descreva sua altura' ));
             if(sexo == 'm'){
                    sexoMaculino+= 1
                    if(altura >= 1.73){
                        alturaMasculinoAcima+=1;
                    }else if(altura < 1.73){
                        alturaMasculinoAbaixo+=1;
                    }
             }
             
             if(sexo == 'f'){
                sexoFeminino+= 1
                if(altura >= 1.60){
                    alturaFemininoAcima+=1;
                }else if(altura < 1.60){
                    alturaFemininoAbaixo+=1;
                }
         }
}while(altura >= 0);

// Resultado da pesquisa de homens
console.log('Quantidade de sexo mascolino que fizerao parte da pesquisa " '+sexoMaculino,'"');
console.log('"'+alturaMasculinoAbaixo,'" Abaixo da media');
console.log('"'+alturaMasculinoAcima,'" Acima da media');

// Resultado da pesquisa de mulheres 

console.log('Quantidade de sexo Feminino que fizerao parte da pesquisa " '+sexoFeminino,'"');
console.log('"'+alturaFemininoAbaixo,'" Abaixo da media');
console.log('"'+alturaFemininoAcima,'" Acima da media');
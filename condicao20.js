var  readlineSync  = require ( 'readline-sync' ) ; 

console.log('Infome os 3 lados de um tringulo para informos se e isosceles,escaleno ou equilatero')

const  lado1    = Number (readlineSync.question( ' primeiro lado?: ' ));
const  lado2    = Number (readlineSync.question( ' segundo lado?: ' ));
const  lado3    = Number (readlineSync.question( ' terceiro lado?: ' ));

//esquilatero
if(lado1 == lado2 && lado1 == lado3){
    console.log('e um equilatero');
}
//ososceles do lado 1
else if((lado1 > lado2 || lado1 > lado3) && (lado2 == lado3)){
    console.log('e um ososceles');
}else if((lado1 < lado2 || lado1 < lado3) && (lado2 == lado3)){
    console.log('e um ososceles');
}
//ososceles do lado 2
else if((lado2 > lado1 || lado2 > lado3) && (lado1 == lado3)){
    console.log('e um ososceles');
}else if((lado2 < lado1 || lado2 < lado3) && (lado1 == lado3)){
    console.log('e um ososceles');
}
//ososceles do lado 3
else if((lado3 > lado1 || lado3 > lado2) && (lado1 == lado2)){
    console.log('e um ososceles');
}else if((lado3 < lado1 || lado3 < lado2) && (lado1 == lado2)){
    console.log('e um ososceles');
}
//escaleno lado1
else if(lado1 > lado2 || lado1 > lado3){
    console.log('e um escaleno');
}else if(lado1 < lado2 || lado1 < lado3){
    console.log('e um escaleno');
}
//escaleno do lado 2
else if(lado2 > lado1 || lado2 > lado3){
    console.log('e um escaleno');
}else if(lado2 < lado1 || lado2 < lado3){
    console.log('e um escaleno');
}
//escaleno do lado 3
else if(lado3 > lado1 || lado3 > lado2){
    console.log('e um escaleno');
}else if(lado3 < lado1 || lado3 < lado2){
    console.log('e um escaleno');
}


/*
Construa um algoritmo que, a partir do valor do comprimento dos três lados de
um triângulo, classifique-o em equilátero, isósceles ou escaleno. Lembre, um
triângulo é equilátero quando o comprimento de todos os seus lados for igual, é
isósceles quando apenas um dos lados tiver comprimento diferente e é escaleno
quando todos os lados tiverem comprimentos diferentes dos demais lados.

*/
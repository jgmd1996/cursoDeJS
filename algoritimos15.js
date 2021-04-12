var  readlineSync  = require ( 'readline-sync' ) ; 

const  quantidade  = Number (readlineSync.question( 'Quantos biscoitos gostaria de fazer? : ' ));


//quantidade em gramas
let acucarg = quantidade*6.666666666666667
let farinhag = quantidade*6.875
let mantegag = quantidade*4.166666666666667
//quantidade em xicaras
let acucarx = quantidade*0.03125
let farinhax = quantidade*0.057291666666667      
let mantegax = quantidade*0.0208333333333333                          

//açucar
console.log('quantidade de açucar em gramas',acucarg);
console.log('quantidade em açucar xicara',acucarx);
//mantega
console.log('quantidade de farinha em gramas',farinhag);
console.log('quantidade em farinha xicara',farinhax);
//matega
console.log('quantidade de mantega em gramas',mantegag);
console.log('quantidade em mantega xicara',mantegax);

/*
Ajustador de Ingredientes – Uma receita de biscoito exige os seguintes
ingredientes para produzir 48 unidades:
a. 1,5 xícaras de açúcar
b. 1 xícara de manteiga
c. 2,75 xícaras de farinha
Crie um algoritmo que pergunte ao usuário quantos cookies ele deseja fazer e
calcule a quantidade correspondente dos ingredientes.
Exemplo: as quantidades listadas servem para fazer 48 unidades. Se o usuário
quisesse produzir 96 unidades (ou seja, o dobro de 48) as quantidades dos
ingredientes devem ser dobradas: 3 xícaras de açúcar, 1 xícara de manteiga e 4,5
xícaras de farinha.

*/

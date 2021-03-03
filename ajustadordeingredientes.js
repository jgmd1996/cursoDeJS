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


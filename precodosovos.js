var  readlineSync  = require ( 'readline-sync' ) ; 

const  ovos  = Number (readlineSync.question( 'Qual a quantidade de ovos vendidos? : ' ));


let duzia = Math.trunc( ovos/12 );
let duziainteira = 10*duzia;
let ovosunidade = ovos-duziainteira;
let valorduzia = duzia*3.25;
let valorunidade = ovosunidade*0.45;
let duziaunidade = ovos-duzia;

console.log('O cliente compro :'+ovos+' ovos');
console.log('Equivale a :'+duzia+' duzia e '+ovosunidade+' unidades');
console.log('O cliente deve paga :'+valorduzia+'R$ pelas :'+duzia+' duzia e :'+valorunidade+'R$ unidades de ovos');


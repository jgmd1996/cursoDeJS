/*var readlineSync = require('readline-sync');
let numeros =[]

for(let quantidadeDeNumero = 1 ; quantidadeDeNumero <=12 ; quantidadeDeNumero ++){
    seila = Number(readlineSync.question('Numero informado? '));
    numeros.push(seila)
}
for(let mostrarAoContrafio= 12 ; mostrarAoContrafio>=0 ; mostrarAoContrafio-=1){
    console.log(numeros[mostrarAoContrafio])
}
*/


// modificaçao do exercicio

let numeros =[]
var readlineSync = require('readline-sync');

do{
    seila = Number(readlineSync.question('Numero informado? '));
    numeros.push(seila)
    tamanho = numeros.length;
}while(seila != 0 && tamanho <= 11)
console.log(numeros)
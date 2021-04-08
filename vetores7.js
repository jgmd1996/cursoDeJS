var readlineSync = require('readline-sync');

numeroDoBilheteGerado= []

for(numeroGerados = 0 ; numeroGerados <=6 ;numeroGerados ++){
    let dia   = Math.floor(Math.random()*10);
    numeroDoBilheteGerado.push(dia);
}
console.log(numeroDoBilheteGerado)
var readlineSync = require('readline-sync');

let semana = ['domingo', 'segunda', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado']
let valorVendidoNoDia = []
let soma = 0
tamanho = valorVendidoNoDia.length;
for (dia = 0; dia <= 6; dia++) {
    var valorDoDia = Number(readlineSync.question('Quanto foi vendido no '+semana[dia]+'?'));
    valorVendidoNoDia.push(valorDoDia);
    if (dia) {
        soma += valorDoDia;

    }
}
console.log('Valor total vendido na semana :', soma)

console.log('Dia  da semana aceitaveis e domingo, segunda-feira,terca-feira,quarta-feira,quinta-feira,sexta-feira,sabado')

do {
   var puxaValorDoVetor = readlineSync.question('Informe aqui o dia da semana que deseja saber quanto foi vendido?');

} while (puxaValorDoVetor != 'domingo' && puxaValorDoVetor != 'segunda' &&  puxaValorDoVetor != 'terca-feira' && puxaValorDoVetor != 'quarta-feira' && puxaValorDoVetor != 'quinta-feira' && puxaValorDoVetor != 'sexta-feira' && puxaValorDoVetor != 'sabado')

if(puxaValorDoVetor == 'domingo'){
    console.log('O valor vendido no '+semana[0]+' e de R$:',valorVendidoNoDia[0])
}else if(puxaValorDoVetor == 'segunda-feira'){
    console.log('O valor vendido no '+semana[1]+' e de R$:',valorVendidoNoDia[1])
}else if(puxaValorDoVetor == 'terca-feira'){
    console.log('O valor vendido no '+semana[2]+' e de R$:',valorVendidoNoDia[2])
}else if(puxaValorDoVetor == 'quarta-feira'){
    console.log('O valor vendido no '+semana[3]+' e de R$:',valorVendidoNoDia[3])
}else if(puxaValorDoVetor == 'quinta-feira'){
    console.log('O valor vendido no '+semana[4]+' e de R$:',valorVendidoNoDia[4])
}else if(puxaValorDoVetor == 'sexta-feira'){
    console.log('O valor vendido no '+semana[5]+' e de R$:',valorVendidoNoDia[5])
}else if(puxaValorDoVetor == 'sabado'){
    console.log('O valor vendido no '+semana[6]+' e de R$:',valorVendidoNoDia[6])
}
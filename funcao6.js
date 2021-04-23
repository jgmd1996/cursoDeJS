var readlineSync = require('readline-sync');


let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let semana = ['domingo', 'segunda', 'terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado']

const dia = Number(readlineSync.question('Qual o dia ?'));
const mes = Number(readlineSync.question('qual o mes ?'));
const ano = Number(readlineSync.question('Qual o ano?'));

var hoje = new Date(ano,mes,dia)
// var diaSem =hoje.getDay()// retorna o dia
// var diaDoMes = hoje.getDate()// retorna o dia do mes
// var ola = hoje.getMonth()
// console.log('dia da semana',diaSem)
// console.log('dia do mes',diaDoMes)
// console.log('mes =',ola)
console.log(hoje)
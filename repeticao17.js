var readlineSync = require('readline-sync');
let valorx = 0;
let idade = 0;
let quantidadeDeItns = 0;
let somaidade = 0;
let somaIdadeQuantidade = 0;
let itnesEncomEndados = 0;
// idade30> para pessoas que morao perto
let idadeMaiorQue301 = 0;
// idade30 < para pessoas que nao morao perto
let idadeMenosQue301 = 0;
// idade30>
let idadeMaiorQue30 = 0;
// idade30 <
let idadeMenosQue30 = 0;
// pesoas que morao na arena da padaria
let pessoasDaArea = 0;
// pesoas que n morao na area
let pessoasNaoArea = 0;
do {
   do {
      cep = Number(readlineSync.question('Qual o cep do cliente? '));
      if (cep > 100000) {
         console.log('codigo postal invalido digite navamente')
      }
   } while (cep > 100000 && cep == 0)
   // saber a idade
   do {
      idade = Number(readlineSync.question('Qual a idade do cliente? '));
      if (idade < 10 || idade > 110) {
         console.log('idade incorreta informe novamente a idade do cliente ')
      } if (idade) {
         somaidade += 1;
         somaIdadeQuantidade += idade
      }

   } while (idade < 10 || idade > 110 && idade == 0);
   //saber a quantidade de itns
   do {
      quantidadeDeItns = Number(readlineSync.question('Quanl a quantidade de itens do cliente? '));
      if (quantidadeDeItns) {
         itnesEncomEndados = quantidadeDeItns + itnesEncomEndados;
      }
      else if (quantidadeDeItns < 1 || quantidadeDeItns > 12) {
         for (erro = 1; erro <= 2; erro++) {
            console.log('Quantidade informada incorreto informe novamente ')
            quantidadeDeItns = Number(readlineSync.question('Quanl a quantidade de itens do cliente? '));
            if (erro == 3) {
               console.log('ultima alternativa seu numero e realmente superior a 12?')
               valorx = Number(readlineSync.question('Quanl a quantidade de itens do cliente? '));
               if (valorx < 1) {
                  console.log('erro numero inaceitavel')
                  if (valorx) {
                     itnesEncomEndados = valorx + itnesEncomEndados;
                  }
               } else {
                  console.log(valorx, 'numero de itens superior confirmado confirmado ')
               }

            }

         }

      }
   } while (quantidadeDeItns < 1 && quantidadeDeItns > 12 || valorx > 1 && quantidadeDeItns == 0)
   console.log(cep)
   console.log(idade)
   console.log(quantidadeDeItns)
   if (cep == 54984) {
      pessoasDaArea += 1;

      if (idade > 30) {
         idadeMaiorQue301 += 1;
      } else if (idade <= 30) {
         idadeMenosQue301 += 1
      }

   } else if (cep != 54984) {
      pessoasNaoArea += 1
      if (idade > 30) {
         idadeMaiorQue30 += 1;
      } else if (idade <= 30) {
         idadeMenosQue30 += 1
      }
   }
}

while (cep != 0)

console.log('Media das idades em geral ', somaidade / somaIdadeQuantidade)
console.log('Total de itens encomendados', itnesEncomEndados)
// pesoas da area
console.log('Pessoas que mrao pero da padaria ', pessoasDaArea)
console.log('Pessoas que morao perto da arena  e tem mais de 30 anos ', idadeMenosQue301)
console.log('Pessoas que morao perto da arena  e tem menos de 30 anos ', idadeMenosQue301)
//pesoas que n morao perto
console.log('Pessoas que não morao pero da padaria ', pessoasNaoArea)
console.log('Pessoas que não morao perto da arena  e tem mais de 30 anos ', idadeMenosQue30)
console.log('Pessoas que não morao perto da arena  e tem menos de 30 anos ', idadeMenosQue30)
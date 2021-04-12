var  readlineSync  = require ( 'readline-sync' ) ; 

console.log('Escolha duas cores primariasa para mostra o resiltado da mistura!')
console.log('Cores primarias :')
console.log('Vermelho :')
console.log('azul :')
console.log('amarelo :')
const  cor1    = readlineSync.question( ' Informe a cor primaria?: ' );
const  cor2    = readlineSync.question( ' Informe a cor primaria?: ' );



if(cor1 == 'vermelho' && cor2 == 'azul'){
    console.log('Resultado roxo')
}if(cor1 == 'azul' && cor2 == 'vermelho'){
    console.log('Resultado roxo')
}else if(cor1 =='azul' && cor2 =='amarelo'){
    console.log('Resultado verde')
}else if(cor1 =='amarelo' && cor2 =='azul'){
    console.log('Resultado verde')
}else if(cor1 =='vermelho' && cor2 =='amarelo'){
    console.log('Resultado laranja')
}else if(cor1 =='amarelo' && cor2 =='vermelho'){
    console.log('Resultado laranja')
}else{
    console.log('erro');
}


/*
Construa um algoritmo que, a partir de duas cores primárias fornecidas pelo
usuário determine qual cor seria obtida pela mistura delas. Para tanto, considere
as informações fornecidas abaixo:
As cores vermelho, azul e amarelo são chamadas de cores primárias porque
não podem ser obtidas a partir de outras cores e, quando misturadas,
resultam numa cor secundária, de acordo com as seguintes regras:
• vermelho + azul = roxo;
• vermelho + amarelo = laranja;
• azul + amarelo = verde.

Ministério da Educação
Se o usuário inserir algo diferente de “vermelho”, “azul” ou “amarelo”, o
programa deverá exibir uma mensagem de erro. Caso contrário, o programa deve
exibir o nome da cor secundária resultante.

*/
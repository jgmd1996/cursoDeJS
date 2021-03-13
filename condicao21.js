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

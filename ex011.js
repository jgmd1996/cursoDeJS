var idade = 110
console.log(`voce tem ${idade} anos`)
if(idade <16){
    console.log('nao pode vota')
}else if (idade < 18 || idade >=65 || idade >100){
    console.log('voto opicional')
}else{
    console.log('voto obrigatorio')
}
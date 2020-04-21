let valores = [8,1,7,4,2,9]
valores.sort()
//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3]) forma burra
console.log(valores[4])
console.log(valores[5])


for(let pos=0; pos < valores.length; pos++){

    console.log(`a posiçao ${pos} em o valor ${valores[pos]}`)
    
}

*/

for(let pos in valores){
    console.log(`a posiçao ${pos} em o valor ${valores[pos]}`)
}




//num.indexOf(o valor que quero pesquisa)    pesquisa um valor dentro
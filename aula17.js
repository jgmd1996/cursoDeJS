let amigo = {nome: 'jose', 
sexo: 'm',
peso: 85.4,
engorda(p=0){
    console,log('engordo')
    this.peso += p
}}

amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
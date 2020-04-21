var agora = new Date()
var hora = agora.getHours()
console.log(`sao exatamente ${hora}`)
if (hora >=6 && hora<=12) {
    console.log('bom dia')
}else if(hora>=1 && hora<=5){
    console.log('boa madrugada')
}
else if(hora <=18){
    console.log('boa tarde')
}else{
    console.log('boa noite')
}
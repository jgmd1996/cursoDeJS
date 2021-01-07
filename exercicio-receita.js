const salario=4000;  
let desconto=0;

if (salario<=1903.98){
    desconto=0;
} else if (salario>=1903.99 && salario<=2826.65){
    desconto=(salario*7.5)/100;
}else if (salario>=2826.66 && salario<=3751.05){
    desconto=(salario*15)/100;
}else if (salario>=3751.06 && salario<=4664.68){
    desconto=(salario*22.5)/100;
}else{ 
    desconto=(salario*27.5)/100;
}

console.log("desconto",desconto);
console.log("salario liquido",salario-desconto);
var  readlineSync  = require ( 'readline-sync' ) ; 
 //aqui espera a resposta do usuario
const  quantidade  = readlineSync.question( 'Digite a quantidade de funcionarios: ' ) ;
//esto com dificudade em enender mais sei que puxa da linha 24
let funcionarios =[];

/*estrutura de repetiçao vai pega o nome,salario,desconto linha 6 a 20 e esperando a resposta */
for(let i = 0;i<quantidade;i++ ){
    
    const  name  = readlineSync.question( 'Digite o nome do funcionario ' +(i+1)+': ' ) ; 
    const  salario  = readlineSync.question( 'Digite o salario do funcionario ' +(i+1)+': ' ) ;
    const desconto = calcularDesconto(salario);
    //uma varialvel(i) da linha 22 a 25 que pega uma estrutura de repetiçao
    const funcionario = {
        nome: name ,
        salario: salario,
        desconto: desconto,
        salarioLiquido: salario-desconto
    };
    funcionarios.push(funcionario);
    
}
//acho que e aqui que gurda a informaçao
for(let i = 0;i<quantidade;i++ ){  
    const funcionario = funcionarios[i];
    mostrarResultado(funcionario.nome,funcionario.salario,funcionario.desconto)
}
//uma funçao criada para caucular e volta  resposa comfome o numero que foi informado do salario linha 26 a 48
function calcularDesconto(salario){
    
    let desconto = 0;

    if (salario<=1903.98){
        desconto=0;
        
    } else if (salario>=1903.99 && salario<=2826.65){
        desconto=(salario*7.5)/100;
        
    }else if (salario>=2826.66 && salario<=3751.05){
        desconto=(salario*15)/100;
       
    }else if (salario>=3751.06 && salario<=4664.68){
        desconto=(salario*22.5)/100;
        
    }else if (salario>4664.68){
        desconto=(salario*27.5)/100;
        
    }
   
    return desconto;/*aqui onde ele volta o desconto comforme o salario que foi informado linha 47 */
}
//aqui vai mostra o resultado na tela e uma funçao que esta sendo puxada na linha 24
function mostrarResultado(name ,salario,desconto){

    console.log( 'Olá ' +  name  + '!');
    console.log( 'o seu salario bruto ' +  salario  + '!');
    console.log("Desconto ",desconto);
    console.log("Salario liquido ",salario-desconto);
}

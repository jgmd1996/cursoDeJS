var readlineSync = require('readline-sync');

let codigoDoEmpregado = [56588,45201,78951,87775,84512,13028,75804,92057,69403,29625]
tamanho=codigoDoEmpregado.length
let horasTrabalhadas =[]
let valorDaHoraTrabalhada = []
let ValorDosSalariosBrutos = []

for(dadosDoEmpregado = 0 ; dadosDoEmpregado < tamanho ; dadosDoEmpregado++){

horas= readlineSync.question('Quantas horan forao trabalhadas pelo funcionario de codigo ?'+codigoDoEmpregado[dadosDoEmpregado]);
horasTrabalhadas.push(horas);
valor = readlineSync.question('Qual o valor da hora trabalhada pelo funcionario de codigo ?'+codigoDoEmpregado[dadosDoEmpregado]);
valorDaHoraTrabalhada.push(valor)
let calularSalarioBruto = horas*valor;
ValorDosSalariosBrutos.push(calularSalarioBruto)
}

for(resultado =0 ; resultado < tamanho ;resultado ++){
    console.log('codigo do funcionarios '+codigoDoEmpregado[resultado]+' horas trabalhadas do funcionario '+horasTrabalhadas[resultado]+' valor da hora do funcionario '+valorDaHoraTrabalhada[resultado]+' salario bruto do funcionario '+ValorDosSalariosBrutos[resultado])

}

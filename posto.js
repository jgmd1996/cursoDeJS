var readlineSync = require('readline-sync');
//nome da unide de saude
let nome = [];
//fim
//nome doi bairro e populaçao
let NomeBairro = [];
let QuantidadeDaPopulacao = [];
//fim
//Registar paciente
let nomePaciente = [];
let rgPaciente = [];
let cpfPaciente = [];
let idadePaciente = [];
let sexoPaciente = [];
let diagnosticoPaciente = [];
let dosesDaVacinaPaciente = [];
//



//nome da unidade de saude
do {
    nomeDoPosto = readlineSync.question('Informe o nome do posto! ');
    if (nomeDoPosto.length < 5 || nomeDoPosto.length > 240) {
        console.log("Quantidade de caracteries esta incorreta");
    }
} while (nomeDoPosto.length < 5 || nomeDoPosto.length > 240)
nome.push(nomeDoPosto);
//fim da logica da unidade de saude

do {
    nomeDoBairro = readlineSync.question('Informe o nome do bairro! ');
    populacao = Number(readlineSync.question('Informe A quantidade da população total! '));

    //informa para a pessoa que esta digitando
    if (nomeDoBairro.length < 5 || nomeDoBairro.length > 240) {
        console.log("Quantidade de caracteries esta incorreta");
    }
    if (populacao <= 0) {
        console.log("Quantidade de caracteries esta incorreta");
    }
    //fim

} while (nomeDoBairro.length < 5 || nomeDoBairro.length > 240 && populacao <= 0)
NomeBairro.push(nomeDoBairro);
QuantidadeDaPopulacao.push(populacao);




do {

    registarnomePaciente = readlineSync.question('Informe o nome do paciente! ');
    if (registarnomePaciente.length < 5 || registarnomePaciente.length > 240) {
        console.log("Quantidade de caracteries esta incorreta");
    }

    registarrgPaciente = readlineSync.question('Informe o RG do paciente! ');
    if (registarrgPaciente.length < 5 || registarrgPaciente.length > 240) {
        console.log("Quantidade de caracteries esta incorreta");
    }

    registarcpfPaciente = Number(readlineSync.question('Informe o cpf do paciente! '));
    if (registarcpfPaciente <= 0) {
        console.log("Quantidade de caracteries esta incorreta");
    }

    registaridadePaciente = Number(readlineSync.question('Informe a idade do paciente! '));
    if (registaridadePaciente <= 0) {
        console.log("Quantidade de caracteries esta incorreta");
    }

    registarsexoPaciente = readlineSync.question('Informe o sexo do paciente! ');
    if (registarsexoPaciente.length < 5 || registarsexoPaciente.length > 240) {
        console.log("Quantidade de caracteries esta incorreta");
    }

    registardiagnosticoPaciente = readlineSync.question('Informe o Diagnostivo do paciente! ');
    if (registardiagnosticoPaciente.length < 5 || registardiagnosticoPaciente.length > 240) {
        console.log("Quantidade de caracteries esta incorreta");
    }

    registardosesDaVacinaPaciente = Number(readlineSync.question('Informe A quantidade de doses ja tomadas! '));
    if (registardosesDaVacinaPaciente <= 0) {
        console.log("Quantidade de caracteries esta incorreta");
    }

    sair = readlineSync.question('Deseja sair do registro de paciente digite sim caso contrario digite qualquer coisa.');
    tamanho = nome.length;

} while (sair != "sim")
nomePaciente.push(registarnomePaciente);
rgPaciente.push(registarrgPaciente);
cpfPaciente.push(registarcpfPaciente);
idadePaciente.push(registaridadePaciente);
sexoPaciente.push(registarsexoPaciente);
diagnosticoPaciente.push(registardiagnosticoPaciente);
dosesDaVacinaPaciente.push(registardosesDaVacinaPaciente);



console.log('Nome da unidade de saude ' + nome);

console.log('Nome do bairro ' + NomeBairro);
console.log('Quantidade de populaçao' + QuantidadeDaPopulacao);

for(mostrar =0 ; mostrar < tamanho ; mostrar ++ ){

    console.log('nomePaciente ' + nomePaciente[mostrar]);
    console.log('rgPaciente ' + rgPaciente[mostrar]);
    console.log('cpfPaciente ' + cpfPaciente[mostrar]);
    console.log('idadePaciente ' + idadePaciente[mostrar]);
    console.log('sexoPaciente ' + sexoPaciente[mostrar]);
    console.log('diagnosticoPaciente ' + diagnosticoPaciente[mostrar]);
    console.log('dosesDaVacinaPaciente ' + dosesDaVacinaPaciente[mostrar]);
    
}



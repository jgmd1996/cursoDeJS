var readlineSync = require('readline-sync');

let paciente = [];
let idadeDosPacientes = 0;
let idadeDePessoasAcimaDe60Anos = 0;
let pacienteInfectados = 0;
do {
    const cpfDoPaciente = Number(readlineSync.question('CPF do paciente? '));
    const rgDoPaciente = Number(readlineSync.question('RG do paciente? '));
    const nomeDoPaciente = readlineSync.question('Nome do paciente? ');
    do {
        idadeDoPaciente = Number(readlineSync.question('Idade do paciente? '));
    } while (idadeDoPaciente > 118)
    if (idadeDoPaciente) {
        idadeDosPacientes += idadeDoPaciente;
        if (idadeDoPaciente >= 60) {
            idadeDePessoasAcimaDe60Anos += 1;
        }
    }

    const sexoDoPaciente = readlineSync.question('Sexo do paciente? ');
    do {
        diagnosticoDoPaciente = readlineSync.question('Paciente infectado por covid-19 "sim" ou "nao"? ');
        if (diagnosticoDoPaciente != 'sim' && diagnosticoDoPaciente != 'nao') {
            console.log(simOuNao(diagnosticoDoPaciente));
        }
    } while (diagnosticoDoPaciente != 'sim' && diagnosticoDoPaciente != 'nao')
    if (diagnosticoDoPaciente == 'sim') {
        pacienteInfectados += 1;
    }
    let chamarFuncao = guardaDadosDosPacientes(cpfDoPaciente, rgDoPaciente, nomeDoPaciente, idadeDoPaciente, sexoDoPaciente, diagnosticoDoPaciente)
    paciente.push(chamarFuncao);
    do {
        sair = readlineSync.question('Deseja dar continuidade na leitura dos dados "sim " ou "nao"?');
        console.log('\n')
        if (sair != 'sim' && sair != 'nao') {
            console.log(simOuNao(sair));
        }
    } while (sair != 'sim' && sair != 'nao')
} while (sair != 'nao');

let vacina = 0;
for (mostrar = 0; mostrar < paciente.length; mostrar++) {
    console.log('CPF do paciente :', paciente[mostrar].cpf);
    console.log('RG do paciente :', paciente[mostrar].rg);
    console.log('Nome do paciente :', paciente[mostrar].nome);
    console.log('Idade do paciente :', paciente[mostrar].idade);
    console.log('Sexo do paciente :', paciente[mostrar].sexo);
    console.log('Paciente infectado por covid-19 :', paciente[mostrar].diagnostico);
    if (paciente[mostrar].diagnostico == 'nao' && paciente[mostrar].idade >= 60) {
        console.log('Paciente precisa receber a dose da vacina contra o covid-19\n ');
        vacina += 1;
    } else if (paciente[mostrar].diagnostico == 'sim') {
        console.log('Paciente precisa ficar isolado por ter diagnostico identificado por covid-19\n ');
    }
}
console.log('Idade media dos pacientes', idadeDosPacientes / paciente.length);
console.log('Quantidade de pacientes com idade igual ou maior que 60 anos :', idadeDePessoasAcimaDe60Anos);
console.log('Quantidade de pacientes com covid-19 :', pacienteInfectados);
if (vacina <= 10) {
    calcularVacina = 10 - vacina;
    console.log(precisaDeVacina(vacina));
    console.log('Quantidade de doses que sobrarão da vacina contra o covid-19  :', calcularVacina);
    console.log('Quantidade de doses necessaria para o proximo dia :',10-calcularVacina);
    
} else if (vacina > 10) {
    calcularVacina = vacina - 10;
    console.log(precisaDeVacina(vacina));
    console.log('Quantidade de doses necessaria para o proximo dia :',calcularVacina,' a mais  da quantidade recebida diariamente')
}

//funçao de resposta sim ou não
function simOuNao() {
    return 'Resposta "sim" ou "nao"!'
}
// funçao guarda dados
function guardaDadosDosPacientes(cpfDoPaciente, rgDoPaciente, nomeDoPaciente, idadeDoPaciente, sexoDoPaciente, diagnosticoDoPaciente) {
    let dados = {
        cpf: cpfDoPaciente,
        rg: rgDoPaciente,
        nome: nomeDoPaciente,
        idade: idadeDoPaciente,
        sexo: sexoDoPaciente,
        diagnostico: diagnosticoDoPaciente
    }
    return dados
}
function precisaDeVacina(vacina) {
    if (vacina <= 10) {
        return 'Sobrou doses da vacina contra o covid-19!'
    } else if (vacina > 10) {
        return 'O hospital precisa de mais doses da vacina contra o covid-19 para o dia seguinte!'
    }
}

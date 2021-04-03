var readlineSync = require('readline-sync');
let nome = [];
let numeroDeLivros = [];
let idadePublicoAlvo = [];

do {
    //nome do altor
    nomeDoAltor = readlineSync.question('Qual o nome do altor? ');
    nome.push(nomeDoAltor);
    //quantidade de livros que o altor escrevel 
    do {
        quantidadeDeLivros = Number(readlineSync.question('Qual o numero de livros escritos ? '));
    } while (quantidadeDeLivros < 0 || quantidadeDeLivros > 50)
    numeroDeLivros.push(quantidadeDeLivros);
    // idade do publico alvo 
    do {
        publicoAlvo = Number(readlineSync.question('Qual a idade do publico alvo do livro? '));
    } while (publicoAlvo < 0 || publicoAlvo > 16)
    idadePublicoAlvo.push(publicoAlvo);
    sair = Number(readlineSync.question('Deseja sair do programa digite "0" se deseja continuar digite qualquer numero? '));
    tamanho = nome.length;

} while (sair != 0)
for(mostrar =0 ; mostrar < tamanho ; mostrar ++ ){

console.log('O autor ' + nome + ' pode ter escrito ' + numeroDeLivros + ' livros destinado a criança de ' + idadePublicoAlvo + ' anos')

}

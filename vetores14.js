var readlineSync = require('readline-sync');

const questoesCorretas = ['b', 'd', 'a', 'a', 'c', 'a', 'b', 'a', 'c', 'd', 'b', 'c', 'd', 'a', 'd', 'c', 'c', 'b', 'd', 'a'];
tamanho = questoesCorretas.length
const respostasDoUsuario = []
let certo = 0;
let errado = 0;
for (perguntas = 0; perguntas < tamanho; perguntas++) {
    alternativas = readlineSync.question('Qual alterntiva esta correta "a" "b" "c" "d" "e" ', (perguntas + 1));
    respostasDoUsuario.push(alternativas)

    if (questoesCorretas[perguntas] == alternativas) {

        certo += 1;
    } else {

        errado += 1;
    }

}

for (resultado = 0; resultado < tamanho; resultado++) {

    if (questoesCorretas[resultado] == respostasDoUsuario[resultado]) {
        console.log('resposta correta  ' + questoesCorretas[resultado])
        console.log('Sua resposta "' + respostasDoUsuario[resultado] + '" esta correta')
        certo += 1;
    } else if (questoesCorretas[resultado] != respostasDoUsuario[resultado]) {
        console.log('resposta correta  ' + questoesCorretas[resultado])
        console.log('Sua resposta "' + respostasDoUsuario[resultado] + '" esta incorreta')
        errado += 1;
    }
}
console.log('acertos ', certo)
console.log('erros', errado)

if (certo >= 15) {
    console.log('aprovado com ' + certo + 'pontos')
} else {
    console.log('reprovado com ' + errado + ' erros ')
}

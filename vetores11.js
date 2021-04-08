let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
let quantidadeDeDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
tamanhoDeMeses = meses.length;

for (informaDiaDoAno = 0; informaDiaDoAno < tamanhoDeMeses; informaDiaDoAno++) {
    console.log(meses[informaDiaDoAno], ' tem ' + quantidadeDeDias[informaDiaDoAno] + ' dias')
}
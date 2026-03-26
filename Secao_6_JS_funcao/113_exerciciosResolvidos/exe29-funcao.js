/**
 * 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
 * deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
 * deles estão fora do intervalo, escrevendo estas informações. 
 */

function contagemNumerosNoIntervalo(vetor) {
    let numerosEntreIntervaloDezVinte = 0
    let numerosForaDoIntervalo = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            numerosEntreIntervaloDezVinte++
        } else {
            numerosForaDoIntervalo++
        }
    }

    return `Quantidade de números DENTRO  do intervalo [10,20]: ${numerosEntreIntervaloDezVinte}` + '\n' + `Quantidade de números FORA do intervalo: ${numerosForaDoIntervalo}`
}

let vetor = [1, 2, 3, 4, 20, 40, 35, 18, 7, 56]

console.log(contagemNumerosNoIntervalo(vetor))
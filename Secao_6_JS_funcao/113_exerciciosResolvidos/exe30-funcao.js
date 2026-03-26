/**
 * 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

function encontraMaior(vetor) {
    let maiorAtual = vetor[0]
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maiorAtual) {
            // atualiza maior
            maiorAtual = vetor[i]
        }
    }
    return maiorAtual
}

function encontraMenor(vetor) {
    let menorAtual = vetor[0]
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menorAtual) {
            // atualiza maior
            menorAtual = vetor[i]
        }
    }
    return menorAtual
}

function encontraMaiorValorMenorValor(vetor) {

    const maior = encontraMaior(vetor)
    const menor = encontraMenor(vetor)

    return `Maior: ${maior}, Menor: ${menor}`
}

let vetor = [10, 2, 3, 4, 20, 40, 35, 18, 7, 56, 1, 300]

console.log(encontraMaiorValorMenorValor(vetor))
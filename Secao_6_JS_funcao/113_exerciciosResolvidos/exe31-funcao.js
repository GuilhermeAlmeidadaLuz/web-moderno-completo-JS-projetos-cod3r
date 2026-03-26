/**
 * 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
 * e imprime a quantidade no console. 
 */

const quantosNumerosNegativos = (vetor) => {
    let contadorNegativos = 0
    vetor.forEach( (valor) => {
        if (valor < 0) {
            contadorNegativos++
        }
    })

    return `Quantidade de Inteiros Negativos: ${contadorNegativos}`
}

vetorInteiros = [1, 4, -2, 21, -40, 11, 30, -1, -3]

console.log(quantosNumerosNegativos(vetorInteiros))
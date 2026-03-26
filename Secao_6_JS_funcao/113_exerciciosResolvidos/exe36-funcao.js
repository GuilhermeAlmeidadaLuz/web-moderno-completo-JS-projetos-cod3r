/**
 * 36) 
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
 * inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
 * elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
 * o valor do elemento for maior que 5.
 */

const multiplicaNumero = (numero, multiplicador) => numero * multiplicador

const multiplicaNumeroMaiorQue5 = (numero, multiplicador) => (numero > 5) ? (numero * multiplicador) : numero

const multiplicaVetorModo1 = (vetorNumerico, multiplicadorInteiro) => {

    let novoVetorMultiplicado = vetorNumerico.map((valor) => multiplicaNumero(valor, multiplicadorInteiro))

    return novoVetorMultiplicado

}

const multiplicaVetorModo2 = (vetorNumerico, multiplicadorInteiro) => {

    let novoVetorMultiplicado = vetorNumerico.map((valor) => multiplicaNumeroMaiorQue5(valor, multiplicadorInteiro))

    return novoVetorMultiplicado
}

console.log(multiplicaVetorModo1([1, 2, 3, 4], 3))

console.log(multiplicaVetorModo2([1, 2, 4, 5, 6, 10, 20], 3))
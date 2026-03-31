/**
 * 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const calculaMediaAritmetica = (vetor) => {
    let somatorio = vetor.reduce(
        (acumulador, valor) => acumulador + valor 
    , 0)

    return `Média Aritmética: ${(somatorio / vetor.length).toFixed(2)}`
}

let vetorDeNotas = [6, 8, 9]
console.log(calculaMediaAritmetica(vetorDeNotas))

console.log(calculaMediaAritmetica([1, 2, 3, 4, 5]))
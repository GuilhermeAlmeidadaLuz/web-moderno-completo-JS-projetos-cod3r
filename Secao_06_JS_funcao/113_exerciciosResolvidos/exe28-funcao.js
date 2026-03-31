/**
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

const { forEach } = require("lodash")

const contadorImparesPares = (vetor) => {
    const contador = {
        pares: 0,
        impares: 0
    }

    vetor.forEach( (valor) => (valor % 2 === 0) ? contador.pares++ : contador.impares++)

    return contador
}

console.log(contadorImparesPares([1,2,4,5,7,8,9,15,6]))

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log("Contagem de Pares e Impares:", contadorImparesPares(vetor))
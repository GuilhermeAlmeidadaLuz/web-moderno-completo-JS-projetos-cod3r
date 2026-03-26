/**
 * 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter 
 * quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 
 * Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
 * mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

const { result } = require("lodash")

let vetorInteiro = [4, 9, 13, 22]
let vetorString = ['bicicleta', 'cachorro', 'alegria', 'fruta']
let vetorDouble = [1.1, 3.56, 7.3, 11.2]

let arrVazio = []

let uniao1 = [].concat(vetorInteiro, vetorString)
let uniao2 = arrVazio.concat(vetorDouble, vetorInteiro)
let uniao3 = arrVazio.concat(vetorString, vetorDouble)

console.log(uniao1)
console.log(uniao2)
console.log(uniao3)

console.log()

function concatenar(...args) {
    console.log('args:', args, '\n', 'args[0]:', args[0], '\n', 'args[1]:', args[1])
    console.log(arguments, '\n')
    
    let resultado = []
    for (let i=0 ; i < arguments.length ; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
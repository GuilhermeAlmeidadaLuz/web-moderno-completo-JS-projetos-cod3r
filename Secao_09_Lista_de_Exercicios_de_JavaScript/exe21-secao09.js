/**
 * 21) Criar uma função que receba um array de números e retorne o menor número desse array
 * 
 * Exemplos:
 * 
 * menorNumero([10, 5, 35, 65])     // retornará 5
 * menorNumero([5, -15, 50, 3])     // retornará -15
 * 
 */


const menorNumero = (numeros) => Math.min(...numeros)

function menorNumero2(arrayDeNumeros) {
    let menor = arrayDeNumeros[0]
    arrayDeNumeros.forEach( (numero) => {
        if (numero < menor) {
            menor = numero
        }
    } )
    return menor
}

console.log(
    menorNumero([10, 5, 35, 65])     // retornará 5
)

console.log(
    menorNumero2([5, -15, 50, 3])     // retornará -15
)
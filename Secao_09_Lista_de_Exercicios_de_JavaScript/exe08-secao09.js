/**
 * 8) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
 * multiplicação deles. Porém, não utilize o operador de multiplicação.
 * 
 * Exemplo:
 * multiplicar(5, 5)    // retornará 25
 * multiplicar(0, 7)    // retornará 0
 * 
 */

function multiplicar(numInteiro1, numInteiro2) {
    if (numInteiro1 >= 0 && numInteiro2 >= 0) {
        // escolha do menor número entre eles para dimunuir o número de vezes que while será executado
        let multiplicando = (numInteiro1 >= numInteiro2) ? numInteiro1 : numInteiro2
        let multiplicador = (numInteiro1 >= numInteiro2) ? numInteiro2 : numInteiro1
        let produto = 0
        
        while (multiplicador > 0) {
            produto += multiplicando 
            multiplicador--
        }

        return produto
    }

}

console.log(multiplicar(5, 5))    // retornará 25
console.log(multiplicar(0, 7))    // retornará 0
console.log(multiplicar(2, 3))    // retornará 6


function multiplicar2(multiplicando, multiplicador) {
    if (multiplicando >= 0 && multiplicador >= 0) {
        // pode ser que o while seja executado mais vezes do que a função multiplicar acima,
        // pois não verifica quem é o menor número na multiplicação
        let produto = 0
        while (multiplicador > 0) {
            produto = produto + multiplicando 
            multiplicador = multiplicador - 1
        }

        return produto
    }

}

console.log()
console.log(multiplicar2(5, 5))    // retornará 25
console.log(multiplicar2(0, 7))    // retornará 0
console.log(multiplicar2(2, 3))    // retornará 6
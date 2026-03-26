/**
 * 12)​ Faça um algoritmo que calcule o fatorial de um número.
 */

const fatorial = numero => {
    if (numero > 0) {
        return numero * fatorial(numero - 1)
    } else if (numero == 0) {
        return 1
    } else {
        return 'Não é possível fazer o fatorial de números negativos'
    }
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(10))
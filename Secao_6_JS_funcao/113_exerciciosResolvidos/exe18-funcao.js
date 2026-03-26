/**
 * 18)
 * Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
 * switch. Crie um case default que escreva ‘Número fora do intervalo.’ 
 */

const numeroEmTexto = (numero) => {
    switch (numero) {
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo.'
    }
}

console.log(numeroEmTexto(0))
console.log(numeroEmTexto(1))
console.log(numeroEmTexto(2))
console.log(numeroEmTexto(3))
console.log(numeroEmTexto(4))
console.log(numeroEmTexto(5))
console.log(numeroEmTexto(6))
console.log(numeroEmTexto(7))
console.log(numeroEmTexto(8))
console.log(numeroEmTexto(9))
console.log(numeroEmTexto(10))


console.log(numeroEmTexto(11))
console.log(numeroEmTexto(20))
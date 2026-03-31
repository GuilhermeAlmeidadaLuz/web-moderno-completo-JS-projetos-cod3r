/**
 * 29) Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
 * 
 * Exemplos:
 * 
 * segundoMaior([12, 16, 1, 5]) // retornará 12
 * segundoMaior([8, 4, 5, 6])   // retornará 6
 */

function segundoMaior(arrayDeNumeros) {
    arrayMenorParaMaior = arrayDeNumeros.sort((a, b) => a > b ? 1 : -1)     // se a > b troca, de forma que os maiores vão para o final
    
    const posicaoSegundoMaior = arrayMenorParaMaior.length - 2
    return arrayMenorParaMaior[posicaoSegundoMaior]
}

console.log(segundoMaior([12, 16, 1, 5]) // retornará 12
)
console.log(
    segundoMaior([8, 4, 5, 6])   // retornará 6
)
/**
 * 28) Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
 * que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
 * têm a quantidade de dígitos indicada pelo segundo parâmetro.
 * 
 * Exemplos:
 * 
 *
 */

const filtrarPorQuantidadeDeDigitos = (arrayDeNumeros, digitos) => {
    const arrayDeNumerosComoTexto = arrayDeNumeros.map((numero) => numero.toString())

    return arrayDeNumerosComoTexto.filter(
        (elemento) => elemento.length === digitos
    ).map(
        (valor) => parseInt(valor)
    )    
}


console.log(
    filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)     // retornará [38, 10, 11]
)
console.log(
    filtrarPorQuantidadeDeDigitos([5, 9, , 1, 125, 11], 1)     // retornará [5, 9, 1]
)

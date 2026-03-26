/**
 * 
 * 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
 * multiplicação e divisão desses valores.
 */

const operacoes = (valor1, valor2) => {
    const soma = valor1 + valor2
    console.log(`Soma: ${valor1} + ${valor2} = ${soma}`)

    const subtracao = valor1 - valor2
    console.log(`Subtração: ${valor1} - ${valor2} = ${subtracao}`)

    const multiplicacao = valor1 * valor2
    console.log(`Multiplicação: ${valor1} * ${valor2} = ${multiplicacao}`)

    const divisao = valor1 / valor2
    if (valor2 === 0) {
        console.log("Erro: Divisão por zero")
    } else {
        console.log(`Divisão: ${valor1} / ${valor2} = ${divisao}`)
    }
}

operacoes(10, 5)
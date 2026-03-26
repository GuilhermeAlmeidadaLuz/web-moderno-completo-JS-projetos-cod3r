/**
 * 38) 
 * Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números 
 * ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente 
 * para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. 
 */

function imprimeImparesEntre(inicio = 0, fim = 100) {
    if (inicio > fim) {
        temporario = fim
        fim = inicio
        inicio = temporario
    }

    for (let i = inicio + 1; i < fim; i++) {
        if (i % 2 !== 0) {
            console.log(i, 'é ímpar')
        }
    }
}

imprimeImparesEntre(20, 10)
console.log()
imprimeImparesEntre()
console.log()
imprimeImparesEntre(inicio=30, fim=40)
console.log()
imprimeImparesEntre(fim=40, inicio=20)
console.log()
imprimeImparesEntre(90)
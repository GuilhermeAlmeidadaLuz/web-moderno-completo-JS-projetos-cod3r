/**
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:  
 * | Plano | Aumento | 
 * |  A    |   10%   |
 * |  B    |   15%   |
 * |  C    |   20%   |
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function calculaAumentoSalarial( planoDeTrabalho, salarioAtual) {
    switch (planoDeTrabalho) {
        case 'A':
            // aumento de 10% sobre o montante inicial que é 100%, logo, 10% + 100% = 110% ou 110/100 ou 1.10
            return `Novo Salário: ${ (salarioAtual * 1.10).toFixed(2) }`
        case 'B':
            // aumento de 15% sobre o montante inicial que é 100%, logo, 15% + 100% = 115% ou 115/100 ou 1.15
            return `Novo Salário: ${ (salarioAtual * 1.15).toFixed(2) }`
        case 'C':
            // aumento de 20% sobre o montante inicial que é 100%, logo, 20% + 100% = 120% ou 120/100 ou 1.20
            return `Novo Salário: ${ (salarioAtual * 1.20).toFixed(2) }`
        default:
            return '[ERRO] Plano de Trabalho inválido, não foi possível calcular o aumento.'
    }
}

console.log(calculaAumentoSalarial('A', 1000))
console.log(calculaAumentoSalarial('B', 1000))
console.log(calculaAumentoSalarial('C', 1000))

console.log(calculaAumentoSalarial('D', 1000))
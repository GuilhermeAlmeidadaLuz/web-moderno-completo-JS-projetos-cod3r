/**
 * 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas 
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. 
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve 
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

const notasSacadasEmDinheiro = (valor) => {
    if (valor <= 0) {
        return '[ERRO] Não é possível realizar o saque!'
    }
    
    const quantidadeDeNotas = {
        'R$100': 0,
        'R$50': 0,
        'R$10': 0,
        'R$5': 0,
        'R$1': 0
    }

    while (valor > 0) {
        if (valor >= 100) {
            valor -= 100
            quantidadeDeNotas['R$100'] += 1
        } else if (valor >= 50 && valor < 100) {
            valor -= 50
            quantidadeDeNotas['R$50'] += 1
        } else if (valor >= 10 && valor < 50) {
            valor -= 10
            quantidadeDeNotas['R$10'] += 1
        } else if (valor >= 5 && valor < 10) {
            valor -= 5
            quantidadeDeNotas['R$5'] += 1
        } else {
            valor -= 1
            quantidadeDeNotas['R$1'] += 1
        }
    }

    return (`
${quantidadeDeNotas['R$100'] ? (quantidadeDeNotas['R$100'] + ' nota(s) de R$ 100. ') : ''}
${quantidadeDeNotas['R$50'] ? (quantidadeDeNotas['R$50'] + ' nota(s) de R$ 50. ') : ''}
${quantidadeDeNotas['R$10'] ? (quantidadeDeNotas['R$10'] + ' nota(s) de R$ 10. ') : ''}
${quantidadeDeNotas['R$5'] ? (quantidadeDeNotas['R$5'] + ' nota(s) de R$ 5. ') : ''}
${quantidadeDeNotas['R$1'] ? (quantidadeDeNotas['R$1'] + ' nota(s) de R$ 1. ') : ''}
    `).replace(/\n/g, '')

}

console.log(notasSacadasEmDinheiro(18))
console.log(notasSacadasEmDinheiro(220))
console.log(notasSacadasEmDinheiro(153))
/**
 * 22)
 * Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
 * parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A 
 * anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
 * compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 
 */

const calculaAnuidade = (mes, valor) => {
    let mesesEmAtraso = 0
    let pagamento = valor
    if (mes > 0 && mes < 13) {
        mesesEmAtraso = mes - 1
        if (mesesEmAtraso) {
            pagamento = valor * (1 + 0.05) ** mesesEmAtraso
        }
        return pagamento.toFixed(2)
    } else {
        return 'Mês inexistente!'
    }
}

console.log(calculaAnuidade(12,100))
console.log(calculaAnuidade(1,100))
console.log(calculaAnuidade(4,100))
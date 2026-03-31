/**
 * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
 * retornará o valor da aplicação sob o regime de juros compostos.
 */

function calculoComJurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    // capitalInicial - valor aplicado
    // taxaDeJuros - em decimal
    // tempoDeAplicação - em períodos (ex: ao ano, mês, trimestre, bimestre)
    const jurosSimples = capitalInicial * taxaDeJuros * tempoDeAplicacao
    const montanteParaResgatar = capitalInicial + jurosSimples
    return montanteParaResgatar
}

function calculoComJurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    // capitalInicial - valor aplicado
    // taxaDeJuros - em decimal
    // tempoDeAplicação - em períodos (ex: ao ano, mês, trimestre, bimestre)
    const montanteParaResgatar = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
    return montanteParaResgatar
}

// Ex.: Calcule o montante produzido por R$ 1 000,00 aplicado à taxa de 2,5% ao mês, após um ano, no sistema de juros simples.
const mesesNoAno = 12
console.log(calculoComJurosSimples(capitalInicial = 1000, taxaDeJuros = 2.5/100, tempoDeAplicacao = mesesNoAno).toFixed(2))

// Ex.: Calcule o montante produzido por R$ 2 000,00 aplicado à taxa de 4% ao trimestre, após um ano, no sistema de juros compostos.
const trimestresNoAno = 4
console.log(calculoComJurosCompostos(capitalInicial = 2000, taxaDeJuros = 4/100, tempoDeAplicacao = trimestresNoAno).toFixed(2))
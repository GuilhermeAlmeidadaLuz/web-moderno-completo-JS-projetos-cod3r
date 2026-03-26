/**
 * 11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
 * De 4 em 4 anos é ano bissexto; 
 * De 100 em 100 anos não é ano bissexto; 
 * De 400 em 400 anos é ano bissexto; 
 * Prevalecem as últimas regras sobre as primeiras. 
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
 * mensagem e retornando  true ou false. */

function eBissexto(ano) {
    let MultiploDeQuatro = (ano % 4 === 0)
    let MultiploDeCem = (ano % 100 === 0)
    let MultiploDeQuatrocentos = (ano % 400 === 0)

    if (ano <= 0) {
        console.log(ano, "É bissexto?")
        return false
    }
    else if (MultiploDeQuatrocentos) {
        console.log(ano, "É bissexto?")
        return true
    } else if (MultiploDeQuatro && !MultiploDeCem) {
        console.log(ano, "É bissexto?")
        return true
    } else {
        console.log(ano, "É bissexto?")
        return false
    }
}

console.log(eBissexto(100))
console.log(eBissexto(98))
console.log(eBissexto(0))
console.log(eBissexto(4))
console.log(eBissexto(104))
console.log(eBissexto(400))
console.log(eBissexto(800))
console.log(eBissexto(200))


console.log(eBissexto(0))
console.log(eBissexto(4))
console.log(eBissexto(100))
console.log(eBissexto(400))
console.log(eBissexto(800))
console.log(eBissexto(2020))
console.log(eBissexto(2021))
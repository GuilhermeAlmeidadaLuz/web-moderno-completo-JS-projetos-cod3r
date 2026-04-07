// 

function real(partes, ...valores) {
    let resultado = []
    valores.forEach( (valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)

console.log()
function tagTeste(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    
    let resultado = []
    let tamanho = partes.length     // Para evitar perda de informação, o tamanho deve ser sempre o das partes
    for (let i = 0; i < tamanho; i++) {
        let valor = isNaN(valores[i]) ? valores[i] : `R$${valores[i].toFixed(2)}`
        resultado.push(partes[i], valor)
    }
    return resultado.join('')
}

const aluno = 'Gui'
const situacao = 'Aprovado'
const lugar = 'Escola'
console.log(tagTeste `${aluno}${situacao}${lugar}`)
console.log()
console.log(tagTeste `${aluno}${situacao}${lugar}.`)
console.log()
console.log(tagTeste `${aluno} ${situacao} ${lugar}`)
console.log()
console.log(tagTeste `${aluno} ${situacao} ${lugar}.`)
console.log()
console.log(tagTeste `O ${aluno} foi ${situacao} na ${lugar}.`)
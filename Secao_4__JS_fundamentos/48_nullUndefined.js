/**
 * Atribuição por valor e atribuição por referência
 */

// Com objetos
const a = {name: 'Teste'}

const b = a     // Atribuiação por referência -> copia endereço de memória
// ambas armazenam o endereço de memória do objeto, ou seja, referenciam o objeto

b.name = 'Opa'  // essa mudança reflete em | a | 
console.log(`b = { name: '${b.name}' }, a = { name: '${a.name}' }`)

// Com tipos primitivos

let c = 3
let d = c       // Atribuição por valor -> copia valor

d++         // adiciona 1 em d

console.log('d = ' + d, ' c = ' + c)    // mudança só ocorre em d
console.log()

/**
 * Null e Undefined
 */

let valor   // não inicializada
console.log(valor)
// console.log(valor2)     // não definido

valor = null    // ausência de valor
console.log(valor)
// console.log(valor.toString())   // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined   // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null    // sem preço
console.log(!!produto.preco)
console.log(produto)


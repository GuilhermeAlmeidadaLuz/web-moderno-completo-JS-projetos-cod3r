const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

// Minha Solução
console.log("\nMINHA SOLUÇÃO:")

const soPreco = formatoJson => JSON.parse(formatoJson)['preco'].toFixed(2)

let precos = carrinho.map(soPreco)
console.log(precos)

// Solução do Professor
console.log("\nSOLUÇÃO DO PROFESSOR:")

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
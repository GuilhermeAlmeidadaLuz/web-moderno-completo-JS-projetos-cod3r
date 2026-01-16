const sequence = {
    _id: 1,
    get id() { return this._id++ }  // primeiro retorna o valor atual, depois incrementa
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto  // persiste o dado
    return produto      // retorna para a requisição tipo post, o produto que foi salvo
}

function getProduto(id) {
    return produtos[id] || {}   // retorno para a requisição tipo get, o produto encontrado
}

function getProdutos() {
    return Object.values(produtos) // retorno para a requisição tipo get, os produtos encontrados
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }
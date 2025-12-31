// 
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1,
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

console.log()

function criarPessoa(param_nome, param_sobrenome) {
    return {
        nome: param_nome,
        sobrenome: param_sobrenome
    }
}

console.log(criarPessoa('Oswald', 'Smith'))
console.log(criarPessoa('Billy', 'Graham'))
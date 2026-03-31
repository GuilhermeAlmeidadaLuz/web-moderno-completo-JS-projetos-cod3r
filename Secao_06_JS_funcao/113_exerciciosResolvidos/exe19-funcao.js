/**
 * 19) O cardápio de uma lanchonete é o seguinte:
 * |     Código     |       Descrição do Produto        |       Preço         |
 * |      100       |          Cachorro Quente          |       R$ 3,00       |
 * |      200       |          Hambúrguer Simples       |       R$ 4,00       |
 * |      300       |          Cheeseburguer            |       R$ 5,50       |
 * |      400       |          Bauru                    |       R$ 7,50       |
 * |      500       |          Refrigerante             |       R$ 3,50       |
 * |      600       |          Suco                     |       R$ 2,80       |
 * 
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
 * comando switch. Crie um caso default para produto não existente. 
 */

function venderLanche(codigoDoItem, quantidade) {
    let preco = 0
    let descricaoDoProduto = ''
    switch (codigoDoItem) {
        case 100:
            preco = 3
            descricaoDoProduto = 'Cachorro Quente'
            break
        case 200:
            preco = 4
            descricaoDoProduto = 'Hambúrguer Simples'
            break
        case 300:
            preco = 5.50
            descricaoDoProduto = 'Cheeseburguer'
            break
        case 400:
            preco = 7.50
            descricaoDoProduto = 'Bauru'
            break
        case 500:
            preco = 3.50
            descricaoDoProduto = 'Refrigerante'
            break
        case 600:
            preco = 2.80
            descricaoDoProduto = 'Suco'
            break
        default:
            return '\tProduto Inexistente' 
    }
    return `\t${descricaoDoProduto}
Quantidade: ${quantidade}
Valor Unitário: R$${preco.toFixed(2)}
-----------------------
Valor Total: R$${(quantidade * preco).toFixed(2)}\n`
}

console.log(venderLanche(100, 2))
console.log(venderLanche(200, 4))
console.log(venderLanche(300, 1))
console.log(venderLanche(400, 10))
console.log(venderLanche(500, 3))
console.log(venderLanche(600, 6))

console.log(venderLanche(700, 1))
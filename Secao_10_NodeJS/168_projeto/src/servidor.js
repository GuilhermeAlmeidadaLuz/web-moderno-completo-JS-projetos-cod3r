const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(express.urlencoded({ extended: true }))

// (Read):
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// usando Route Param = '/produtos/:id'
app.get('/produtos/:id', (req, res, next) => { // :id é Route Param
    res.send(bancoDeDados.getProduto(req.params.id))
})

// (Create):
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  // converte para JSON e envia um retorno da requisição
})

// (Update) Edita - Altera o produto já criado:
app.put('/produtos/:id', (req, res, next) => {  // :id é Route Param
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  // converte para JSON e envia um retorno da requisição
})

// (Delete):
app.delete('/produtos/:id', (req, res, next) => {  // :id é Route Param
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)  // converte para JSON e envia um retorno da requisição
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
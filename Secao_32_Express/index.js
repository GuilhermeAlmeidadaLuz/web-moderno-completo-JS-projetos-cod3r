const express = require('express')
const app = express()   // instanciar express
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
// require('./api/produto')(app, 'com param!') // mesmo que:
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')


app.post('/usuario', usuarioApi.salvar)
app.post('/usuario', usuarioApi.obter)

app.use(bodyParser.text())  // retorna uma função middleware que interpreta/valida os dados do body e se for marcado como tipo text, coloca dentro de req.body antes de passar para as rotas
app.use(bodyParser.json())  // retorna uma função middleware que interpreta/valida os dados do body e se for marcado como tipo json, coloca dentro de req.body antes de passar para as rotas
app.use(bodyParser.urlencoded( { extended: true } ) )  // retorna uma função middleware que interpreta/valida os dados do body e se for marcado como tipo x-www-form-urlencoded, coloca dentro de req.body antes de passar para as rotas

app.use(saudacao('Guilherme'))   // entende que saudacao é uma função middleware

// a ordem das funções importa
// Chain of Responsability - Cadeia de Resposabilidade (Padrão do Express)
app.use((req, res, next) => {
    console.log('Antes')
    next()
})

app.get('/clientes/relatorio', (req, res) => { // ordem importa - evita considerar relatorio como id da rota abaixo
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    //     // res.json(JSON.parse(corpo))
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.get('/opa', (req, res, next) => { // sem URL associada, qualquer url vai ser respondida por aqui
    console.log('Durante...')
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    
    // res.json([
        //     {id: 7, name: 'Ana', position: 1},
        //     {id: 34, name: 'Bia', position: 2},
        //     {id: 73, name: 'Carlos', position: 3}
        // ])
        
    // res.json({
        //     name: 'iPad 32Gb',
        //     price: 1899.00,
        //     discount: 0.12
        // })
            
    // res.send("<h1>Estou bem!</h1><br><br><h2>Tipo é HTML!</h2>") 
    
    next()
})

app.use((req, res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log("Backend executando...")
})  // uma porta só pode ser ocupada por um único processo


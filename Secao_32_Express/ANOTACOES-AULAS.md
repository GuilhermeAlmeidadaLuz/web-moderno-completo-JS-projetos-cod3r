# Seção 32 - Express

## Aula 550: Criando o Projeto
```powershell
mkdir Secao_32_Express && cd Secao_32_Express

npm init -y

npm i --save express@4.16.3 -E

code .

code .gitignore # node_modules deve ser posto no arquivo

code index.js
```

## Aula 551: Configuração & Launcher #01

- Sobre versões no `package.json`:

> - **major:** para grandes correções
> - **minor:** para pequenas correções
> - **fix:** para correção de bugs

```json
// 3 formas:

// "express": major . minor . fix   , somente versão exata
"dependencies": {
    "express": "4.16.3"    // versão exata 
}

// "express": ^ major . minor . fix , permite versões diferentes no minor e no fix
"dependencies": {
    "express": "^4.16.3"    // versões que variam minor e fix
}

// "express": ~ major . minor . fix , permite versões diferentes no fix
"dependencies": {
    "express": "~4.16.3"    // versões que variam fix
}
```
- edição do arquivo `index.js`.

- instalação da dependência de desenvolvimento `nodemon`: launcher da aplicação para ambiente de desenvolvimento.

```powershell
npm i --save-dev nodemon@1.18.4 -E
```

```json
// incluir nodemon nos scripts para monitar o arquivo principal
"scripts": {
    "start": "nodemon"
  }
```

```powershell
# executa o script com nodemon
npm run start

# ou, por start ser conhecido do node, fica simplificado:

npm start
```

## 552: Configuração & Launcher #02
- **pm2:** instalação de laucher de produção para a aplicação.
```powershell
npm i --save pm2@3.0.4 -E
```
> - incluir no arquivo `package.json` o script de execução.
```json
"scripts": {
    "start": "nodemon",
    "production": "pm2 start index.js --name appx-backend"
}
```

> - Executar a aplicação com o comando no terminal:
```powershell
npm run production
```

> - Com instalação global do **`pm2`**, é possível ver tela de monitoramento com aplicações em execução no background:
> - Ótimo para microsserviços
```powershell
npm i -g pm2

pm2 monit

pm2 show <id|name>

pm2 status

pm2 show <id>

pm2 restart <0> # reinicia app
pm2 restart <name> # reinicia app

pm2 stop <id>

pm2 kill # mata a instância do pm2 - limpa e não executa mais o pm2 em background
```

## 553: Tratando a Primeira Requisição
- Serviços e Requisições via http na API criada com Express.

- edição de `index.js`

- instalação de wizard `postman` via site oficial. Para conseguir
fazer outros tipos de requisição, de uma maneira mais controlada.
    > app.get,
    > app.post
    > ,... ,
    > app.use,
    > app.all

## 554: Tipos de Resposta

- HTML
- JSON
- Texto
- Binário (Streaming de Dados)
- etc

## 555: Middleware #01

- a ordem das funções importa
- Middleware é um método executado antes das funções normais
- Chain of Responsability - Cadeia de Resposabilidade

- Função Middleware:
    > é uma função que recebe como parâmetros na sua callback requsiçao, resposta e chamada para a próxima função da cadeia de responsabilidades que está tratando da url especificada.

- Sem url no app.use, todas as requisições passam pelo middleware global

- Middlewares desenvolvidos por terceiros:
    > bodyparser | cors | ...

## 556: Middleware #02

- Criar novo arquivo `saudacaoMid.js` na pasta raiz `/`:
```powershell
code /saudacaoMid.js
```

- Edição do arquivo `saudacaoMid.js`
- Edição do arquivo `index.js`

## 557: Lendo Dados da Requisição
- como receber parâmetros pela requisição

- edição do arquivo `index.js`
```JavaScript
app.get('/clientes/relatorio', (req, res) => { 
    // ordem importa - evita considerar relatorio como id da rota abaixo
    res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})
```
- Parâmetros de Rota 
> http>//localhost:3000/clientes/:id

- Parâmetros de Consulta - após a `?` e com uso de `=`, sendo separados pelo
operador `&`.
> GET http://localhost:3000/clientes/relatorio?completo=true&ano=2018

## 558: Entendendo o Body Parser
- Cria uma propriedade dentro de `request` chamada `body` que contém
o resultado do body interpretado por ele.

- instalação via npm:
```powershell
npm i --save body-parser@1.18.3 -E
```
- referenciar body parser em `index.js`
```JavaScript
const bodyParser = require('body-parser')
```

- **Middlewares Globais** (Para todas as Rotas) com o Body Parser no `index.js`
```JavaScript
// retorna uma função middleware que interpreta/valida os dados do body e se for marcado como tipo text, coloca dentro de req.body antes de passar para as rotas
app.use(bodyParser.text())

// retorna uma função middleware que interpreta/valida os dados do body e se for marcado como tipo json, coloca dentro de req.body antes de passar para as rotas
app.use(bodyParser.json())

// retorna uma função middleware que interpreta/valida os dados do body e se for marcado como tipo x-www-form-urlencoded, coloca dentro de req.body antes de passar para as rotas
app.use(bodyParser.urlencoded( { extended: true } ) )
```

## 559: Comunicação Entre Módulos #01
- uso de `require` e `module.exports`
- criação de pasta `api` na pasta raiz `/` da **Secao_32_Express**
- criação e edição de arquivo `./api/usuario.js`:
```JavaScript
function salvar(req, res) {
    res.send('Usuário > salvar')
}

function obter(req, res) {
    res.send('Usuário > obter')
}
// torna as funções visíveis:
module.exports = { salvar, obter }
```

- edição do arquivo `index.js`:
```JavaScript
const usuarioApi = require('./api/usuario')

app.post('/usuario', usuarioApi.salvar)
app.post('/usuario', usuarioApi.obter)
```

## 560: Comunicação Entre Módulos #02
- passando parâmetros para o módulo

- criação e edição de arquivo `./api/produto.js`:
```JavaScript
module.exports =  (app, texto) => {
    function salvar(req, res) {
        res.send('Produto > salvar > ' + texto)
    }

    function obter(req, res) {
        res.send('Produto > obter > ' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}
```

- edição do arquivo `index.js`:
```JavaScript
// require('./api/produto')(app, 'com param!') // mesmo que:

const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')
```
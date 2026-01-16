const fs = require('fs')

const caminho = __dirname + '\\162_arquivo.json'
// console.log(caminho)

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    // console.log(typeof conteudo)     // string
    // console.log(conteudo)            
    const config = JSON.parse(conteudo) // object
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./162_arquivo.json')
// console.log(typeof config)   // object
console.log(config.db)  // executou primeiro que o assincrono

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    // console.log(resultado)
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })   
}

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
}   // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))    // o retorno de função assíncrona obterAlunos é passado como argumento para o parâmetro 'alunos' que se encontra no '.then(alunos => ...)'
    .then(nomes => console.log(nomes))  // o retorno do primeiro '.then(alunos => ...retorno)' é passado como argumento para o parâmetro 'nomes' do segundo '.then(nomes => ...)'
    
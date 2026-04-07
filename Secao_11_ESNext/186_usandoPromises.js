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
                    // console.log('...')
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })   
}

// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes. concat(alunos.map(aluno => `C: ${aluno.nome}`))
//             console.log(nomes)
//         })
//     })
// })

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])  // chama cada uma indidualmente, depois o '.then' e 'resolve'
    // .then(x => console.log(x))  // x é um array de objetos oriundo do JSON.parse(resultado) que foi passado para o parâmetro x dessa função callback que assume a posição da função 'resolve'
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))
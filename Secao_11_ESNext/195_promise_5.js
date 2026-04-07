function funcionarOuNao(valor, chanceErro) {
    return new Promise( (resolve, reject) => {
        try {
            con.log('temp')  // erro que desvia o fluxo para do try para o catch
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')  // vai para o método .catch da promise
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)   // o tratamento de erro mais próximo do local é o que será utilizado
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), // erro que é capturado e tratado pelo método .catch, se houver
        err => console.log(`Erro Esp.: ${err}`) // se houver reject() na promise, executa por ser um tratamento de erro anterior ao método .catch
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))
function saudacao(nome) {
    // ...
    // se estiver algo aqui, será executado apenas 1 vez na chamada da função (pelo interpretador do JS)
    // console.log(`Seja bem vindo ${nome}.`)
    return function (req, res, next) {  // retorna uma função middleware
        console.log(`Seja bem vindo ${nome}.`)  // sempre que for feito uma requisição
        next()
    }
}

module.exports = saudacao
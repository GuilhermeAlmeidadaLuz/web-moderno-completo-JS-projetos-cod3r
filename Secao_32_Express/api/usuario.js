function salvar(req, res) {
    res.send('Usuário > salvar')
}

function obter(req, res) {
    res.send('Usuário > obter')
}
// torna as funções visíveis:
module.exports = { salvar, obter }